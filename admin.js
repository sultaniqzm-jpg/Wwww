console.log("Admin JS connected!");

const SUPABASE_URL = "https://owkvhgzvixvjkacrdqso.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FTEsGpTsqG4-ZYiic4BKmw_BsL22lCC";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connected!");