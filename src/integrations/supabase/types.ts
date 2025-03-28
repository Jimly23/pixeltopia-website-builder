export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_interviews: {
        Row: {
          analysis: Json
          company_id: number | null
          created_at: string | null
          id: number
          user_id: number | null
        }
        Insert: {
          analysis: Json
          company_id?: number | null
          created_at?: string | null
          id?: number
          user_id?: number | null
        }
        Update: {
          analysis?: Json
          company_id?: number | null
          created_at?: string | null
          id?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_interviews_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_interviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_recommendations: {
        Row: {
          created_at: string | null
          details: Json
          id: number
          recommendation_type: string
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          details: Json
          id?: number
          recommendation_type: string
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          details?: Json
          id?: number
          recommendation_type?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          created_at: string | null
          id: number
          job_id: number | null
          status: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          job_id?: number | null
          status?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          job_id?: number | null
          status?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      authentication_methods: {
        Row: {
          created_at: string | null
          id: number
          method: string
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          method: string
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          method?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "authentication_methods_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          address: string
          bio: string | null
          company_name: string
          created_at: string | null
          id: number
          phone: string
          profile_path: string | null
          verified: boolean | null
        }
        Insert: {
          address: string
          bio?: string | null
          company_name: string
          created_at?: string | null
          id?: number
          phone: string
          profile_path?: string | null
          verified?: boolean | null
        }
        Update: {
          address?: string
          bio?: string | null
          company_name?: string
          created_at?: string | null
          id?: number
          phone?: string
          profile_path?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      cv_screening: {
        Row: {
          company_id: number | null
          created_at: string | null
          id: number
          score: number | null
          strengths: string | null
          user_file_id: number | null
          user_id: number | null
          weaknesses: string | null
        }
        Insert: {
          company_id?: number | null
          created_at?: string | null
          id?: number
          score?: number | null
          strengths?: string | null
          user_file_id?: number | null
          user_id?: number | null
          weaknesses?: string | null
        }
        Update: {
          company_id?: number | null
          created_at?: string | null
          id?: number
          score?: number | null
          strengths?: string | null
          user_file_id?: number | null
          user_id?: number | null
          weaknesses?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cv_screening_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cv_screening_user_file_id_fkey"
            columns: ["user_file_id"]
            isOneToOne: false
            referencedRelation: "user_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cv_screening_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_simulations: {
        Row: {
          created_at: string | null
          evaluation: Json | null
          id: number
          mode: string
          score: number | null
          user_file_id: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          evaluation?: Json | null
          id?: number
          mode: string
          score?: number | null
          user_file_id?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          evaluation?: Json | null
          id?: number
          mode?: string
          score?: number | null
          user_file_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_simulations_user_file_id_fkey"
            columns: ["user_file_id"]
            isOneToOne: false
            referencedRelation: "user_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_simulations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          approved: boolean | null
          company_id: number | null
          created_at: string | null
          description: string
          id: number
          requirements: string
          title: string
        }
        Insert: {
          approved?: boolean | null
          company_id?: number | null
          created_at?: string | null
          description: string
          id?: number
          requirements: string
          title: string
        }
        Update: {
          approved?: boolean | null
          company_id?: number | null
          created_at?: string | null
          description?: string
          id?: number
          requirements?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: number
          is_read: boolean | null
          message: string
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_read?: boolean | null
          message: string
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_read?: boolean | null
          message?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_files: {
        Row: {
          created_at: string | null
          id: number
          store_path: string
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          store_path: string
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          store_path?: string
          type?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          address: string
          bio: string
          created_at: string | null
          email: string
          full_name: string
          id: number
          password_hash: string
          phone: string
          profile_picture: string
          role: string | null
          status: string | null
        }
        Insert: {
          address: string
          bio: string
          created_at?: string | null
          email: string
          full_name: string
          id?: number
          password_hash: string
          phone: string
          profile_picture: string
          role?: string | null
          status?: string | null
        }
        Update: {
          address?: string
          bio?: string
          created_at?: string | null
          email?: string
          full_name?: string
          id?: number
          password_hash?: string
          phone?: string
          profile_picture?: string
          role?: string | null
          status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
