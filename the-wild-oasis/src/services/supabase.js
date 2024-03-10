import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://caeffxmwwnzukwmmhpsv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZWZmeG13d256dWt3bW1ocHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0Nzk3MTcsImV4cCI6MjAyNTA1NTcxN30.yn4sbfLZQlhZU5o2jtwfNTW0Z3Y0yMki1UnEm9gqoL0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
