// src/app/actions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  message?: string;
  success?: boolean;
};

export async function submitContactForm(
  _prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  // 1. Extract form fields
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;
  const location = formData.get('location') as string;
  const captchaToken = formData.get('g-recaptcha-response') as string;

  // 2. Basic Validation
  if (!name || !phone || !service) {
    return { message: 'Please fill in all required fields.' };
  }

  if (!captchaToken) {
    return { message: 'Please complete the security check.' };
  }

  // 3. Verify Google reCAPTCHA Token
  try {
    const verifyReq = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    });
    
    const verifyRes = await verifyReq.json();
    
    if (!verifyRes.success) {
      console.warn('reCAPTCHA verification failed:', verifyRes);
      return { message: 'Security verification failed. Are you a bot?' };
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { message: 'Failed to verify security check. Please try again.' };
  }

  // 4. Format Data for the Email
  const requestDate = new Date().toLocaleString('en-KE', { 
    timeZone: 'Africa/Nairobi',
    dateStyle: 'full',
    timeStyle: 'short'
  });
  
  // Format the service name to look nice (e.g., "office cleaning" -> "Office Cleaning")
  const formattedService = service.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // 5. Professional HTML Email Template
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Service Request</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        
        <tr>
          <td style="background-color: #008080; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">
              NEXORA CLEANING
            </h1>
            <p style="color: #A2B59F; margin: 5px 0 0 0; font-size: 14px;">
              New Website Lead Received
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding: 30px;">
            <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
              Hello Team,<br><br>
              A new service request has been submitted through the Nexora website. Please review the details below and contact the client within 1 hour.
            </p>

            <table width="100%" cellpadding="12" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 20px;">
              <tr>
                <td colspan="2" style="border-bottom: 2px solid #e5e7eb;">
                  <h3 style="margin: 0; color: #008080; font-size: 18px;">Customer Information</h3>
                </td>
              </tr>
              <tr>
                <td width="30%" style="font-weight: bold; color: #4b5563; border-bottom: 1px solid #e5e7eb;">Name:</td>
                <td style="color: #111827; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td width="30%" style="font-weight: bold; color: #4b5563; border-bottom: 1px solid #e5e7eb;">Phone:</td>
                <td style="color: #111827; font-weight: bold; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="color: #8DB600; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td width="30%" style="font-weight: bold; color: #4b5563;">Location:</td>
                <td style="color: #111827;">${location || '<span style="color: #9ca3af; font-style: italic;">Not provided</span>'}</td>
              </tr>
            </table>

            <table width="100%" cellpadding="12" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px;">
              <tr>
                <td colspan="2" style="border-bottom: 2px solid #e5e7eb;">
                  <h3 style="margin: 0; color: #008080; font-size: 18px;">Service Details</h3>
                </td>
              </tr>
              <tr>
                <td width="30%" style="font-weight: bold; color: #4b5563; border-bottom: 1px solid #e5e7eb;">Service:</td>
                <td style="color: #111827; font-weight: bold; border-bottom: 1px solid #e5e7eb;">${formattedService}</td>
              </tr>
              <tr>
                <td width="30%" style="font-weight: bold; color: #4b5563;">Message:</td>
                <td style="color: #111827; line-height: 1.5;">${message ? message.replace(/\n/g, '<br>') : '<span style="color: #9ca3af; font-style: italic;">No message provided</span>'}</td>
              </tr>
            </table>

          </td>
        </tr>

        <tr>
          <td style="background-color: #1f2937; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0 0 5px 0;">This email was generated automatically from the Nexora website.</p>
            <p style="margin: 0 0 10px 0;"><strong>Timestamp:</strong> ${requestDate}</p>
            <p style="margin: 0;">Powered by <a href="https://dewlons.com" style="color: #A2B59F; text-decoration: none;">Dewlon Systems</a></p>
          </td>
        </tr>

      </table>
    </body>
    </html>
  `;

  // 6. Send Email via Resend
  try {
    await resend.emails.send({
      from: 'Nexora Website Leads <info@sipedo.co.ke>', // Make sure this domain is verified in Resend
      to: 'geoffreyobiri641@gmail.com', // Where you want to receive the emails
      subject: `New Lead: ${formattedService} in ${location || 'Nairobi'}`, // Removed emoji
      html: emailHtml,
      replyTo: "no-reply@sipedo.co.ke" // Best practice
    });
  } catch (error) {
    console.error('Resend error:', error); // Removed emoji
    return { message: 'Failed to send. Please try again or call us directly.' };
  }

  return { success: true };
}