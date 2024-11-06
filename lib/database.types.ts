export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      lessons: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          category: string
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          content: Json[] // Array of lesson items
          author_id: string
          published: boolean
          total_students: number
          average_rating: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          category: string
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          content: Json[]
          author_id: string
          published?: boolean
          total_students?: number
          average_rating?: number
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          progress: number // 0-100
          last_studied: string
          next_review: string
          strength: number // 0-5, like Duolingo's strength bars
          completed: boolean
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          progress?: number
          last_studied?: string
          next_review?: string
          strength?: number
          completed?: boolean
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          display_name: string
          avatar_url: string
          streak_count: number
          last_study_date: string
          xp_points: number
          level: number
        }
        Insert: {
          id?: string
          user_id: string
          display_name: string
          avatar_url?: string
          streak_count?: number
          last_study_date?: string
          xp_points?: number
          level?: number
        }
      }
    }
  }
}