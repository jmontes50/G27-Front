import { createClient } from "@supabase/supabase-js";

const urlSupabase = "https://ytsxelzvvijqambgqitd.supabase.co";
const apiKeySupabase = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(urlSupabase, apiKeySupabase);

export default supabase;