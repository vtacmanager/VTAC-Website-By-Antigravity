import { createClient } from '@supabase/supabase-js';

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://exwgxfxqsxjmgguuwvug.supabase.co';
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4d2d4Znhxc3hqbWdndXV3dnVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NDc2MTksImV4cCI6MjA4MjIyMzYxOX0.CwAM5V4o1qi7RsrfN-2XdKRxv-VUpiz0CkNqu3LFK8Y';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try {
        const { error } = await supabase
            .from('newsletter_subscribers')
            .update({
                marketing_opt_in: false,
                marketing_unsubscribed_at: new Date().toISOString()
            })
            .eq('email', email);

        if (error) {
            console.error('Supabase Error on unsubscribe:', error);
            return res.status(500).json({ error: 'Failed to unsubscribe' });
        }

        return res.status(200).json({ success: true, message: 'Successfully unsubscribed' });
    } catch (err) {
        console.error('Unsubscribe API Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
