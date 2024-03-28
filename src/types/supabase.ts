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
      customer_addresses: {
        Row: {
          address_line1: string
          address_line2: string | null
          city: string
          country: string
          created_at: string
          customer_id: string
          id: string
          is_default_billing: boolean
          is_default_shipping: boolean
          postal_code: string
          state_province_region_county: string
          updated_at: string
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          city: string
          country: string
          created_at?: string
          customer_id: string
          id?: string
          is_default_billing?: boolean
          is_default_shipping?: boolean
          postal_code: string
          state_province_region_county: string
          updated_at?: string
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          city?: string
          country?: string
          created_at?: string
          customer_id?: string
          id?: string
          is_default_billing?: boolean
          is_default_shipping?: boolean
          postal_code?: string
          state_province_region_county?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_customer_addresses_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          country_flag: string | null
          created_at: string
          email: string
          id: string
          is_business: boolean
          name: string
          national_id: string | null
          nationality: string | null
          updated_at: string
        }
        Insert: {
          country_flag?: string | null
          created_at?: string
          email: string
          id?: string
          is_business?: boolean
          name: string
          national_id?: string | null
          nationality?: string | null
          updated_at?: string
        }
        Update: {
          country_flag?: string | null
          created_at?: string
          email?: string
          id?: string
          is_business?: boolean
          name?: string
          national_id?: string | null
          nationality?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          end_date: string | null
          id: string
          item_type: Database["public"]["Enums"]["order_item_item_type"]
          order_id: string
          price_per_day: number | null
          price_per_item: number
          product_id: string
          quantity: number
          start_date: string | null
          total_price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: string
          item_type: Database["public"]["Enums"]["order_item_item_type"]
          order_id: string
          price_per_day?: number | null
          price_per_item: number
          product_id: string
          quantity: number
          start_date?: string | null
          total_price: number
          updated_at: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: string
          item_type?: Database["public"]["Enums"]["order_item_item_type"]
          order_id?: string
          price_per_day?: number | null
          price_per_item?: number
          product_id?: string
          quantity?: number
          start_date?: string | null
          total_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          confirmed_at: string | null
          created_at: string
          customer_id: string
          delivered: boolean
          delivered_at: string | null
          delivery_charge: number
          has_unreturned_rentals: boolean
          id: string
          is_paid: boolean
          shipped_at: string | null
          status: Database["public"]["Enums"]["order_status"] | null
          total_price: number | null
          updated_at: string
        }
        Insert: {
          confirmed_at?: string | null
          created_at?: string
          customer_id: string
          delivered?: boolean
          delivered_at?: string | null
          delivery_charge: number
          has_unreturned_rentals?: boolean
          id?: string
          is_paid?: boolean
          shipped_at?: string | null
          status?: Database["public"]["Enums"]["order_status"] | null
          total_price?: number | null
          updated_at: string
        }
        Update: {
          confirmed_at?: string | null
          created_at?: string
          customer_id?: string
          delivered?: boolean
          delivered_at?: string | null
          delivery_charge?: number
          has_unreturned_rentals?: boolean
          id?: string
          is_paid?: boolean
          shipped_at?: string | null
          status?: Database["public"]["Enums"]["order_status"] | null
          total_price?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      product_categories: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          discount: number
          id: string
          image: string
          in_stock: number
          is_purchasable: boolean
          is_rentable: boolean
          name: string
          number_rented: number
          price: number
          rental_price: number
          rental_price_per_day: number
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          discount?: number
          id?: string
          image?: string
          in_stock?: number
          is_purchasable?: boolean
          is_rentable?: boolean
          name: string
          number_rented?: number
          price?: number
          rental_price?: number
          rental_price_per_day?: number
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          discount?: number
          id?: string
          image?: string
          in_stock?: number
          is_purchasable?: boolean
          is_rentable?: boolean
          name?: string
          number_rented?: number
          price?: number
          rental_price?: number
          rental_price_per_day?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_products_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      rentals: {
        Row: {
          created_at: string
          customer_id: string
          end_date: string
          id: string
          order_item_id: string
          product_id: string
          start_date: string
          status: Database["public"]["Enums"]["rental_status"]
          total_price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          end_date: string
          id?: string
          order_item_id: string
          product_id: string
          start_date: string
          status?: Database["public"]["Enums"]["rental_status"]
          total_price: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          end_date?: string
          id?: string
          order_item_id?: string
          product_id?: string
          start_date?: string
          status?: Database["public"]["Enums"]["rental_status"]
          total_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_rental_customer"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_rental_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_rentals_order_item_id_fkey"
            columns: ["order_item_id"]
            isOneToOne: false
            referencedRelation: "order_items"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          accepting_orders: boolean
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          accepting_orders?: boolean
          created_at?: string
          id?: string
          updated_at: string
        }
        Update: {
          accepting_orders?: boolean
          created_at?: string
          id?: string
          updated_at?: string
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
      order_item_item_type: "purchase" | "rental"
      order_status:
        | "pending"
        | "confirmed"
        | "shipped"
        | "delivered"
        | "cancelled"
      rental_status: "reserved" | "rented" | "returned" | "late" | "cancelled"
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
