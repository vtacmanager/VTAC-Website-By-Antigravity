import { createClient } from '@supabase/supabase-js';

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // These environment variables need to be set in Vercel. 
    // Fallbacks provided for local development if needed, though they should be in .env
    const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://exwgxfxqsxjmgguuwvug.supabase.co';
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4d2d4Znhxc3hqbWdndXV3dnVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NDc2MTksImV4cCI6MjA4MjIyMzYxOX0.CwAM5V4o1qi7RsrfN-2XdKRxv-VUpiz0CkNqu3LFK8Y';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .insert([{ email }])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            // If the error code is '23505' (unique violation), it means they already subscribed
            if (error.code === '23505') {
                return res.status(409).json({ error: 'You are already subscribed!' });
            }
            return res.status(500).json({ error: 'Failed to subscribe' });
        }

        return res.status(200).json({ success: true, subscriber: data[0] });
    } catch (err) {
        console.error('Subscription API Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
