import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://pykwlvijgvydidfcpaux.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5a3dsdmlqZ3Z5ZGlkZmNwYXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNjkxNDksImV4cCI6MjA1Njg0NTE0OX0.-CYwy8-bbHIlSpZQAceAJWPyVhPemQg4jlLMa12t6sk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
