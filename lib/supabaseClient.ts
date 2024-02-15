// supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = "process.env.NEXT_PUBLIC_SUPABASE_URL"
const supabaseKey = "process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY"
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabase