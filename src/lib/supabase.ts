import { supabase as supabaseClient } from './supabaseClient';

export const supabaseConfigured = supabaseClient !== null;

export const supabase = supabaseClient;
