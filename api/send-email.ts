import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;
        const { subject, type } = data;

        let emailContent = '';

        if (type === 'demo') {
            emailContent = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Organization:</strong> ${data.orgName}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Segment:</strong> ${data.segment}</p>
        <p><strong>Goal:</strong> ${data.goal}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
        <p><strong>Timezone:</strong> ${data.timezone}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      `;
        } else {
            emailContent = `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Department:</strong> ${data.department}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
        }

        const { data: result, error } = await resend.emails.send({
            from: 'VTAC Manager <onboarding@resend.dev>', // You should change this to your verified domain later
            to: ['sales@vtacmanager.com'],
            subject: subject || 'New Notification from VTAC Website',
            html: emailContent,
        });

        if (error) {
            return res.status(400).json(error);
        }

        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
