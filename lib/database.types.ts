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
      customer: {
        Row: {
          address1: string | null
          address2: string | null
          city: string | null
          email: string | null
          gender: string | null
          id: number
          name: string | null
          phone: string | null
          profilephoto: string | null
          state: string | null
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          email?: string | null
          gender?: string | null
          id?: never
          name?: string | null
          phone?: string | null
          profilephoto?: string | null
          state?: string | null
        }
        Update: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          email?: string | null
          gender?: string | null
          id?: never
          name?: string | null
          phone?: string | null
          profilephoto?: string | null
          state?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          customer_name: string | null
          order_date: string | null
          order_id: number
          status: string | null
          total_items: number | null
        }
        Insert: {
          customer_name?: string | null
          order_date?: string | null
          order_id?: never
          status?: string | null
          total_items?: number | null
        }
        Update: {
          customer_name?: string | null
          order_date?: string | null
          order_id?: never
          status?: string | null
          total_items?: number | null
        }
        Relationships: []
      }
      product: {
        Row: {
          description: string | null
          featured_image: string | null
          gallery: string[] | null
          id: number
          name: string | null
          price: number | null
        }
        Insert: {
          description?: string | null
          featured_image?: string | null
          gallery?: string[] | null
          id?: never
          name?: string | null
          price?: number | null
        }
        Update: {
          description?: string | null
          featured_image?: string | null
          gallery?: string[] | null
          id?: never
          name?: string | null
          price?: number | null
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
