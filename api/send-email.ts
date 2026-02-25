import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;
        const { subject, type } = data;

        const emailStyles = `
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
        `;

        const headerStyles = `
            background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
            padding: 32px;
            color: white;
            text-align: center;
        `;

        const contentStyles = `
            padding: 32px;
            background: white;
        `;

        const tableStyles = `
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
        `;

        const labelStyles = `
            padding: 8px 0;
            color: #6b7280;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            width: 140px;
            vertical-align: top;
        `;

        const valueStyles = `
            padding: 8px 0;
            color: #111827;
            font-size: 16px;
            font-weight: 500;
            vertical-align: top;
        `;

        const footerStyles = `
            padding: 24px;
            background: #f9fafb;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #9ca3af;
            text-align: center;
        `;

        let rows = '';
        let title = '';

        if (type === 'demo') {
            title = 'New Demo Request';
            const fields = [
                { l: 'Full Name', v: `${data.firstName} ${data.lastName}` },
                { l: 'Email', v: data.email },
                { l: 'Phone', v: data.phone },
                { l: 'Organization', v: data.orgName },
                { l: 'Role', v: data.role },
                { l: 'Segment', v: data.segment },
                { l: 'Focus Goal', v: data.goal },
                { l: 'Preferred Date', v: data.preferredDate },
                { l: 'Preferred Time', v: data.preferredTime },
                { l: 'Timezone', v: data.timezone },
                { l: 'Message', v: data.message || 'No additional message provided' }
            ];
            rows = fields.map(f => `
                <tr>
                    <td style="${labelStyles}">${f.l}</td>
                    <td style="${valueStyles}">${f.v}</td>
                </tr>
            `).join('');
        } else {
            title = 'New Contact Message';
            const fields = [
                { l: 'From', v: `${data.name} (${data.email})` },
                { l: 'Department', v: data.department },
                { l: 'Subject', v: data.subject },
                { l: 'Message', v: data.message }
            ];
            rows = fields.map(f => `
                <tr>
                    <td style="${labelStyles}">${f.l}</td>
                    <td style="${valueStyles}">${f.v}</td>
                </tr>
            `).join('');
        }

        const emailHtml = `
            <div style="${emailStyles}">
                <div style="${headerStyles}">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">VTAC MANAGER</h1>
                    <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">${title}</p>
                </div>
                <div style="${contentStyles}">
                    <p style="margin-top: 0; color: #374151; font-weight: 500;">You have received a new notification from your website:</p>
                    <table style="${tableStyles}">
                        ${rows}
                    </table>
                </div>
                <div style="${footerStyles}">
                    <p style="margin: 0; font-weight: 700; color: #4b5563; margin-bottom: 4px;">VTAC MANAGER SYSTEM</p>
                    <p style="margin: 0;">Automated Notification Service • Bangkok, Thailand</p>
                    <p style="margin: 8px 0 0;">© ${new Date().getFullYear()} VTAC Manager. All rights reserved.</p>
                </div>
            </div>
        `;

        const { data: result, error } = await resend.emails.send({
            from: 'VTAC Website <onboarding@resend.dev>',
            to: ['sales@vtacmanager.com'],
            subject: subject || `Website Notification: ${title}`,
            html: emailHtml,
        });

        if (error) {
            return res.status(400).json(error);
        }

        return res.status(200).json(result);
    } catch (err) {
        console.error('Email API Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
