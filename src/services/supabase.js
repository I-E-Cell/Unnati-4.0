import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hqcxtryscvfmjonvdgut.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxY3h0cnlzY3ZmbWpvbnZkZ3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjU1OTksImV4cCI6MjA0MTQ0MTU5OX0.hTM3aKQs5lVcdMEG9i_DMisKY7Asu2xfrGso3lHTVxA';
export const supabase = createClient(supabaseUrl, supabaseKey);