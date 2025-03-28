
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userData: any | null; // For storing user data from the custom users table
  loading: boolean;
  signOut: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  userData: null,
  loading: true,
  signOut: async () => {},
  refreshUserData: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user data from the custom users table
  const fetchUserData = async (email: string) => {
    try {
      console.log('Fetching user data for email:', email);
      
      // Let's check what users exist in the table first (for debugging)
      const { data: allUsers, error: allUsersError } = await supabase
        .from('users')
        .select('email, id, full_name')
        .limit(10);
        
      if (allUsersError) {
        console.error('Error fetching all users:', allUsersError);
      } else {
        console.log('Available users in the table:', allUsers);
      }
      
      // Now attempt to fetch the specific user
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .ilike('email', email) // Use case-insensitive matching
        .maybeSingle(); // Use maybeSingle instead of single to avoid errors when no data is found

      if (error) {
        console.error('Error fetching user data:', error);
        return null;
      }

      console.log('User data retrieved:', data);
      return data;
    } catch (error) {
      console.error('Error in fetchUserData:', error);
      return null;
    }
  };

  // Function to refresh user data that can be called from components
  const refreshUserData = async () => {
    if (user?.email) {
      const data = await fetchUserData(user.email);
      if (data) {
        setUserData(data);
      } else {
        console.warn('No user data found during refresh for email:', user.email);
      }
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        // Fetch user data when auth state changes
        if (session?.user?.email) {
          // Use setTimeout to avoid potential deadlocks with Supabase client
          setTimeout(async () => {
            const data = await fetchUserData(session.user.email!);
            setUserData(data);
            setLoading(false);
            
            if (!data) {
              console.warn('⚠️ User authenticated but no matching record found in users table');
              toast.warning('Your user profile is incomplete. Please contact support.');
            }
          }, 0);
        } else {
          setUserData(null);
          setLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log('Retrieved session:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user?.email) {
        const data = await fetchUserData(session.user.email);
        setUserData(data);
        
        if (!data) {
          console.warn('⚠️ User authenticated but no matching record found in users table');
          toast.warning('Your user profile is incomplete. Please contact support.');
        }
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      toast.success("You have been signed out successfully");
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error("Failed to sign out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    session,
    user,
    userData,
    loading,
    signOut,
    refreshUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
