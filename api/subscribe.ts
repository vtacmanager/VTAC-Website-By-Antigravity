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
            .insert([{
                email,
                marketing_opt_in: true,
                marketing_opt_in_source: 'website_footer',
                // _at timestamps have DEFAULT NOW() in db
            }])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            // If the error code is '23505' (unique violation), it means they already subscribed
            if (error.code === '23505') {
                return res.status(409).json({ error: 'You are already subscribed!' });
            }
            return res.status(500).json({ error: 'Failed to subscribe' });
        }

        // Send Welcome Email using Resend
        if (process.env.RESEND_API_KEY) {
            const { Resend } = await import('resend');
            const resend = new Resend(process.env.RESEND_API_KEY);

            const emailHtml = `
            <div style="font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); padding: 32px; color: white; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">VTAC MANAGER</h1>
                    <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Welcome to the Ecosystem</p>
                </div>
                <div style="padding: 32px; background: white;">
                    <p style="margin-top: 0; font-weight: 600; font-size: 18px; color: #0ea5e9;">Thank you for subscribing!</p>
                    <p>We're excited to have you on board. You'll now be among the first to receive updates on new features, expert tactical insights, and exclusive VTAC Manager news.</p>
                    <p>Stay tuned for what's coming next!</p>
                    <p style="margin-top: 32px;">Best regards,<br><strong>The VTAC Team</strong></p>
                </div>
                <div style="padding: 24px; background: #f8fafc; border-top: 1px solid #e5e7eb; font-size: 12px; color: #64748b; text-align: center;">
                    <p style="margin: 0 0 12px 0;">You are receiving this email because you subscribed to updates at vtacmanager.com.</p>
                    <p style="margin: 0;">To stop receiving these emails, you can <a href="mailto:support@vtacmanager.com?subject=Unsubscribe" style="color: #0ea5e9; text-decoration: underline;">unsubscribe here</a>.</p>
                    <p style="margin: 12px 0 0;">© ${new Date().getFullYear()} VTAC SOLUTIONS LTD. All rights reserved.</p>
                </div>
            </div>`;

            try {
                await resend.emails.send({
                    from: 'VTAC Manager <info@vtacmanager.com>',
                    to: [email],
                    subject: 'Welcome to VTAC Manager',
                    html: emailHtml,
                });
            } catch (emailErr) {
                console.error('Failed to send welcome email:', emailErr);
                // We don't return an error to the user if the welcome email fails, 
                // as they are already successfully in the database.
            }
        }

        return res.status(200).json({ success: true, subscriber: data[0] });
    } catch (err) {
        console.error('Subscription API Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
