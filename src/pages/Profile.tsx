
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, Lock, LogOut } from "lucide-react";

// Define the profile form schema using zod
const profileFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  location: z.string().optional(),
  bio: z.string().optional(),
  phoneNumber: z.string().optional(),
});

// Define the password change schema
const passwordChangeSchema = z.object({
  currentPassword: z.string().min(6, { message: "Current password is required" }),
  newPassword: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string().min(6, { message: "Please confirm your new password." }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordChangeValues = z.infer<typeof passwordChangeSchema>;

const ProfilePage = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileFormValues | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  // Profile form setup
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      location: "",
      bio: "",
      phoneNumber: "",
    }
  });

  // Password change form setup
  const passwordForm = useForm<PasswordChangeValues>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }
  });

  // Fetch user profile data on component mount
  useEffect(() => {
    if (user) {
      // Initialize form with user data from auth
      profileForm.setValue("email", user.email || "");
      
      // Set user metadata if available
      if (user.user_metadata) {
        if (user.user_metadata.full_name) {
          profileForm.setValue("fullName", user.user_metadata.full_name);
        }
        if (user.user_metadata.location) {
          profileForm.setValue("location", user.user_metadata.location);
        }
        if (user.user_metadata.bio) {
          profileForm.setValue("bio", user.user_metadata.bio);
        }
        if (user.user_metadata.phone_number) {
          profileForm.setValue("phoneNumber", user.user_metadata.phone_number);
        }
      }
      
      setProfileData({
        fullName: user.user_metadata?.full_name || "",
        email: user.email || "",
        location: user.user_metadata?.location || "",
        bio: user.user_metadata?.bio || "",
        phoneNumber: user.user_metadata?.phone_number || "",
      });
    }
  }, [user]);

  // Handle profile update
  const onProfileSubmit = async (data: ProfileFormValues) => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        email: data.email,
        data: {
          full_name: data.fullName,
          location: data.location,
          bio: data.bio,
          phone_number: data.phoneNumber,
        },
      });

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle password change
  const onPasswordSubmit = async (data: PasswordChangeValues) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.newPassword,
      });

      if (error) throw error;

      toast({
        title: "Password updated",
        description: "Your password has been changed successfully",
      });
      
      // Reset the form after successful submission
      passwordForm.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to change password",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // If user is not loaded yet, show loading
  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.user_metadata?.avatar_url || ""} alt={user.user_metadata?.full_name || "User"} />
                    <AvatarFallback className="text-2xl">
                      {user.user_metadata?.full_name ? user.user_metadata.full_name.charAt(0).toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{user.user_metadata?.full_name || "User"}</h2>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                  <div className="w-full border-t pt-4 mt-4">
                    <nav className="space-y-2">
                      <Button 
                        variant={activeTab === "profile" ? "default" : "ghost"} 
                        className="w-full justify-start" 
                        onClick={() => setActiveTab("profile")}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile Information
                      </Button>
                      <Button 
                        variant={activeTab === "security" ? "default" : "ghost"} 
                        className="w-full justify-start" 
                        onClick={() => setActiveTab("security")}
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Password & Security
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </nav>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4">
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and how others see you on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={profileForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input placeholder="City, Country" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={profileForm.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Biography</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about yourself" 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              A brief description about yourself, your skills, and your experience.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="bg-found-blue hover:bg-found-blue-dark"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Save Changes"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "security" && (
              <Card>
                <CardHeader>
                  <CardTitle>Password & Security</CardTitle>
                  <CardDescription>
                    Update your password and manage account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...passwordForm}>
                    <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                      <FormField
                        control={passwordForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Current password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={passwordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="New password" {...field} />
                            </FormControl>
                            <FormDescription>
                              Password must be at least 6 characters long.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={passwordForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Confirm new password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="bg-found-blue hover:bg-found-blue-dark"
                        disabled={loading}
                      >
                        {loading ? "Updating..." : "Update Password"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
