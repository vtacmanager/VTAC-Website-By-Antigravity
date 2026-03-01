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
        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert([{
                email,
                marketing_opt_in: true,
                marketing_opt_in_source: 'website_footer',
                // _at timestamps have DEFAULT NOW() in db
            }]);

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

            const { lang } = req.body;
            const isThai = lang === 'th';

            const headerImage = "https://exwgxfxqsxjmgguuwvug.supabase.co/storage/v1/object/public/Website/welcome-pack-5g-pitch-v1-1200w.jpg";

            const emailSubject = isThai
                ? "⚽ Welcome to the Squad! Your Pre-Season Blueprint is Inside."
                : "⚽ Welcome to the Squad! Your Pre-Season Blueprint is Inside.";

            const htmlContentEn = `
                <div style="font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #1e293b; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
                    
                    <div style="background-color: #020617; padding: 24px; text-align: center; border-bottom: 2px solid #0ea5e9;">
                        <span style="font-size: 28px; font-weight: 900; letter-spacing: -0.05em; color: #ffffff;">
                            VTAC <span style="color: #22d3ee;">MANAGER</span>
                        </span>
                    </div>

                    <img src="${headerImage}" alt="VTAC Manager 5G Pitch" style="width: 100%; height: auto; display: block;" />

                    <div style="padding: 40px 32px;">
                        <p style="font-size: 18px; font-weight: 700; color: #0ea5e9; font-style: italic; margin-top: 0;">
                            "Traditional tools help you run the business, but VTAC helps you win the match."
                        </p>

                        <h2 style="font-size: 24px; font-weight: 800; color: #020617; margin-bottom: 16px;">Thank you for joining VTAC MANAGER!</h2>
                        
                        <p style="font-size: 16px;">Welcome to VTAC MANAGER &ndash; the platform built specifically for coaches who aren't just looking to 'administer', but are looking to win.</p>
                        
                        <p style="font-size: 16px;">Pre-season is just around the corner, and we know exactly the kind of headaches coaches face every year:</p>
                        <ul style="background-color: #f8fafc; padding: 20px 20px 20px 40px; border-radius: 12px; margin: 24px 0;">
                            <li style="margin-bottom: 12px;"><em>"I've sent the tactical plan to the group chat, but will they actually understand it, or just scroll past?"</em></li>
                            <li style="margin-bottom: 12px;"><em>"The training ground is waterlogged and we can't get onto the pitch &ndash; do we have to cancel the session entirely?"</em></li>
                            <li><em>"Where is last season's player data? Why don't we have a continuous history of their development?"</em></li>
                        </ul>

                        <h3 style="font-size: 20px; font-weight: 800; color: #020617; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">The Tactical Chaos Ends Here.</h3>
                        <p style="font-size: 16px;">We are here to put a stop to that frustration. With our integrated digital ecosystem and the world's first multiplayer tactical engine, we help you:</p>
                        
                        <ul style="margin-bottom: 32px;">
                            <li style="margin-bottom: 12px;"><strong>Verify Understanding Instantly:</strong> Move beyond static images. Run interactive, real-time tactical walkthroughs where players actually move the markers.</li>
                            <li style="margin-bottom: 12px;"><strong>Train Anywhere (Remote-Ready):</strong> If the pitch is closed or the team is apart, tactical development doesn't have to stop. Switch to a remote session seamlessly.</li>
                            <li style="margin-bottom: 12px;"><strong>Build a Digital Legacy:</strong> Maintain a continuous history of player performance over multiple seasons with our automated Digital CVs.</li>
                        </ul>

                        <div style="text-align: center; margin: 40px 0;">
                            <a href="https://app.vtacmanager.com" style="background-color: #0ea5e9; color: #ffffff; padding: 16px 32px; font-size: 16px; font-weight: 800; text-decoration: none; border-radius: 12px; display: inline-block; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);">Start Your Season Right<br /><span style="font-size: 12px; font-weight: 600; text-transform: none; display: block; margin-top: 4px;">Log In to Dashboard</span></a>
                        </div>

                        <div style="background-color: #020617; color: #ffffff; padding: 32px; border-radius: 16px; margin-bottom: 32px;">
                            <h3 style="font-size: 20px; font-weight: 800; margin-top: 0; display: flex; align-items: center; gap: 8px;">🎁 What's inside your VTAC MANAGER?</h3>
                            
                            <h4 style="color: #22d3ee; margin-bottom: 8px; font-size: 16px;">1. Stop the Tactical Chaos: Your Pre-Season Blueprint</h4>
                            <p style="font-size: 14px; margin-top: 0; color: #cbd5e1; margin-bottom: 20px;">A concise guide to getting your team organised in under 10 minutes &ndash; from setting up your iHUB to registering your squad so you're ready for the first whistle.</p>
                            
                            <h4 style="color: #22d3ee; margin-bottom: 8px; font-size: 16px;">2. Why static PDFs are killing your squad's engagement</h4>
                            <p style="font-size: 14px; margin-top: 0; color: #cbd5e1; margin-bottom: 20px;">An insight into why the modern generation doesn't respond to still images, and why our Patented Multiplayer Engine is the key to making tactical learning "stick".</p>
                            
                            <h4 style="color: #22d3ee; margin-bottom: 8px; font-size: 16px;">3. Building the Future: More than just a tool</h4>
                            <p style="font-size: 14px; margin-top: 0; color: #cbd5e1; margin-bottom: 0;">A look behind our patented technology and how it helps you create a lasting Digital Legacy for every player in your club.</p>
                        </div>

                        <h3 style="font-size: 20px; font-weight: 800; color: #020617; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">3 Steps to Start Transforming Your Team Today</h3>
                        <ol style="margin-bottom: 32px; padding-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Centralise at iHUB:</strong> Move your data away from scattered notebooks and WhatsApp groups into one secure home.</li>
                            <li style="margin-bottom: 12px;"><strong>Play on the 5G Pitch:</strong> Invite your assistant coach or senior players to move markers on the board in real-time to test the system.</li>
                            <li><strong>Track Growth:</strong> Start building the first Automated Player CV to begin recording your team's journey.</li>
                        </ol>

                        <p style="font-size: 16px; font-weight: 600;">We're ready to hit the ground running with you. Let's make this season your team's most successful one yet.</p>
                        
                        <p style="margin-top: 32px; font-size: 16px;">Cheers,<br><strong style="color: #0ea5e9;">The VTAC MANAGER Team</strong></p>
                    </div>

                    <div style="padding: 24px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
                        <p style="margin: 0 0 8px 0;">You are receiving this email because you subscribed to updates at vtacmanager.com.</p>
                        <p style="margin: 0 0 16px 0;">To stop receiving these emails, you can <a href="mailto:support@vtacmanager.com?subject=Unsubscribe" style="color: #0ea5e9; text-decoration: underline;">unsubscribe here</a>.</p>
                        <p style="margin: 0;">&copy; ${new Date().getFullYear()} VTAC SOLUTIONS LTD. All rights reserved.</p>
                    </div>

                </div>
            `;

            const htmlContentTh = `
                <div style="font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: #1e293b; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
                    
                    <div style="background-color: #020617; padding: 24px; text-align: center; border-bottom: 2px solid #0ea5e9;">
                        <span style="font-size: 28px; font-weight: 900; letter-spacing: -0.05em; color: #ffffff;">
                            VTAC <span style="color: #22d3ee;">MANAGER</span>
                        </span>
                    </div>

                    <img src="${headerImage}" alt="VTAC Manager 5G Pitch" style="width: 100%; height: auto; display: block;" />

                    <div style="padding: 40px 32px;">
                        <p style="font-size: 18px; font-weight: 700; color: #0ea5e9; font-style: italic; margin-top: 0;">
                            "Traditional tools help you run the business, but VTAC helps you win the game."
                        </p>

                        <h2 style="font-size: 24px; font-weight: 800; color: #020617; margin-bottom: 16px;">สวัสดีครับโค้ช, ยินดีต้อนรับสู่ VTAC MANAGER!</h2>
                        
                        <p style="font-size: 16px;">แพลตฟอร์มที่ถูกสร้างขึ้นมาเพื่อโค้ชที่ไม่ได้ต้องการแค่การ 'จัดการ' แต่ต้องการ <strong>'ชัยชนะ'</strong> ครับ!</p>
                        
                        <p style="font-size: 16px;">ฤดูกาลใหม่กำลังจะเริ่มขึ้น และเราเข้าใจดีว่าโค้ชทุกคนต้องเจอกับความกังวลเดิมๆ ที่บั่นทอนสมาธิในการทำทีม:</p>
                        <ul style="background-color: #f8fafc; padding: 20px 20px 20px 40px; border-radius: 12px; margin: 24px 0;">
                            <li style="margin-bottom: 12px;"><em>"ส่งแผนไปในกลุ่มเด็กๆ จะเข้าใจจริงๆ หรือแค่กดอ่านผ่านๆ?"</em></li>
                            <li style="margin-bottom: 12px;"><em>"เมื่อสนามซ้อมปิด ไม่สามารถเข้าใช้งานได้ (Remote) ทีมต้องยกเลิกการซ้อมทิ้งไปเฉยๆ หรือเปล่า?"</em></li>
                            <li><em>"ข้อมูลนักเตะปีก่อนๆ หายไปไหนหมด ทำไมเราถึงไม่มีประวัติที่ต่อเนื่อง?"</em></li>
                        </ul>

                        <h3 style="font-size: 20px; font-weight: 800; color: #020617; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">The Tactical Chaos Ends Here.</h3>
                        <p style="font-size: 16px;">เรามาเพื่อหยุดความวุ่นวายเหล่านี้ครับ! ด้วยระบบนิเวศดิจิทัลอัจฉริยะและกระดานแท็กติกแบบ Multiplayer รายแรกของโลก เราจะช่วยให้คุณ:</p>
                        
                        <ul style="margin-bottom: 32px;">
                            <li style="margin-bottom: 12px;"><strong>เช็คความเข้าใจได้ทันที:</strong> ไม่ใช่แค่ส่งรูปแผน แต่เป็นการซ้อมแผนแบบ Interactive ที่เห็นภาพจริงและเคลื่อนที่ได้แบบเรียลไทม์</li>
                            <li style="margin-bottom: 12px;"><strong>ซ้อมได้ทุกที่ (Remote Training):</strong> แม้สนามจะปิด แต่การพัฒนาแท็กติกของทีมไม่ต้องหยุดชะงักผ่านระบบการซ้อมทางไกล</li>
                            <li style="margin-bottom: 12px;"><strong>สร้าง Digital Legacy:</strong> เก็บประวัติและผลงานนักเตะแบบต่อเนื่องหลายฤดูกาลในรูปแบบ Digital CV เพื่ออนาคตของนักเตะ</li>
                        </ul>

                        <div style="text-align: center; margin: 40px 0;">
                            <a href="https://app.vtacmanager.com" style="background-color: #0ea5e9; color: #ffffff; padding: 16px 32px; font-size: 16px; font-weight: 800; text-decoration: none; border-radius: 12px; display: inline-block; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);">เริ่มต้นฤดูกาลที่เหนือกว่า<br /><span style="font-size: 12px; font-weight: 600; text-transform: none; display: block; margin-top: 4px;">เข้าสู่ระบบ Dashboard (คลิก)</span></a>
                        </div>

                        <div style="background-color: #020617; color: #ffffff; padding: 32px; border-radius: 16px; margin-bottom: 32px;">
                            <h3 style="font-size: 20px; font-weight: 800; margin-top: 0; display: flex; align-items: center; gap: 8px;">🎁 What's inside your VTAC MANAGER?</h3>
                            
                            <h4 style="color: #22d3ee; margin-bottom: 8px; font-size: 16px;">1. Stop the Tactical Chaos: Your Pre-Season Blueprint</h4>
                            <p style="font-size: 14px; margin-top: 0; color: #cbd5e1; margin-bottom: 20px;">คู่มือฉบับย่อที่จะช่วยให้คุณเซตระบบทีมเสร็จภายใน 10 นาที ตั้งแต่การตั้งค่า iHUB ไปจนถึงการลงทะเบียนนักเตะ เพื่อให้คุณพร้อมลุยตั้งแต่แมตช์แรก</p>
                            
                            <h4 style="color: #22d3ee; margin-bottom: 8px; font-size: 16px;">2. Why static PDFs are killing your players' engagement</h4>
                            <p style="font-size: 14px; margin-top: 0; color: #cbd5e1; margin-bottom: 20px;">บทวิเคราะห์ว่าทำไมเด็กรุ่นใหม่ถึงไม่ตอบสนองต่อรูปภาพนิ่งๆ และทำไม Patented Multiplayer Engine ของเราถึงเป็นคำตอบที่จะทำให้พวกเขา "สนุก" ไปกับการเรียนรู้แท็กติก</p>
                            
                            <h4 style="color: #22d3ee; margin-bottom: 8px; font-size: 16px;">3. Building the Future: More than just a tool</h4>
                            <p style="font-size: 14px; margin-top: 0; color: #cbd5e1; margin-bottom: 0;">ทำความรู้จักกับเบื้องหลังเทคโนโลยีสิทธิบัตรของเรา ที่จะช่วยสร้างประวัติดิจิทัล (Digital Legacy) ให้นักเตะทุกคนในทีมของคุณอย่างยั่งยืน</p>
                        </div>

                        <h3 style="font-size: 20px; font-weight: 800; color: #020617; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">3 Steps to Start Transforming Your Team Today</h3>
                        <ol style="margin-bottom: 32px; padding-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Centralize at iHUB:</strong> ย้ายข้อมูลจากกระดาษและ WhatsApp มาไว้ในที่เดียวเพื่อความเป็นระเบียบ</li>
                            <li style="margin-bottom: 12px;"><strong>Play on 5G Pitch:</strong> ชวนผู้ช่วยโค้ชหรือลูกทีม เข้ามาลองขยับหมากบนบอร์ดแบบเรียลไทม์เพื่อทดสอบความเข้าใจ</li>
                            <li><strong>Track Growth:</strong> เริ่มสร้าง Automated Player CV ให้นักเตะคนแรกของคุณเพื่อบันทึกพัฒนาการ</li>
                        </ol>

                        <p style="font-size: 16px; font-weight: 600;">เราพร้อมเดินหน้าไปกับคุณ เพื่อให้ฤดูกาลนี้เป็นปีที่ยอดเยี่ยมที่สุดของทีมครับ!</p>
                        
                        <p style="margin-top: 32px; font-size: 16px;">ขอแสดงความนับถือ,<br><strong style="color: #0ea5e9;">The VTAC MANAGER Team</strong></p>
                    </div>

                    <div style="padding: 24px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
                        <p style="margin: 0 0 8px 0;">อีเมลฉบับนี้ถูกจัดส่งเนื่องจากคุณได้ลงทะเบียนรับข่าวสารผ่านเว็บไซต์ vtacmanager.com</p>
                        <p style="margin: 0 0 16px 0;">หากไม่ต้องการรับอีเมลในอนาคต คุณสามารถ <a href="mailto:support@vtacmanager.com?subject=Unsubscribe" style="color: #0ea5e9; text-decoration: underline;">กดยกเลิกการสมัครรับข่าวสารที่นี่</a>.</p>
                        <p style="margin: 0;">&copy; ${new Date().getFullYear()} VTAC SOLUTIONS LTD. สงวนลิขสิทธิ์</p>
                    </div>

                </div>
            `;

            const emailHtml = isThai ? htmlContentTh : htmlContentEn;

            try {
                await resend.emails.send({
                    from: 'VTAC Manager <info@vtacmanager.com>',
                    to: [email],
                    subject: emailSubject,
                    html: emailHtml,
                });
            } catch (emailErr) {
                console.error('Failed to send welcome email:', emailErr);
                // We don't return an error to the user if the welcome email fails, 
                // as they are already successfully in the database.
            }
        }

        return res.status(200).json({ success: true, email });
    } catch (err) {
        console.error('Subscription API Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
