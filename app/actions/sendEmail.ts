"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactUsForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function sendEmail(data: ContactUsForm) {
  await resend.emails.send({
    from: "onboarding@resend.dev", // make sure this is a verified sender
    to: "haidernaseer339@gmail.com",
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: 'Arial', sans-serif; color: #333; padding: 20px; line-height: 1.6;">
        <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 20px; background-color: #007bff; color: #fff; text-align: center; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; background-color: #fff; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; color: #555;">You have received a new message from the contact form on your website. Here are the details:</p>
              <table style="width: 100%; margin-top: 20px;">
                <tr>
                  <td style="padding: 8px; background-color: #f1f1f1; font-weight: bold;">Full Name</td>
                  <td style="padding: 8px;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; background-color: #f1f1f1; font-weight: bold;">Email</td>
                  <td style="padding: 8px;"><a href="mailto:${data.email}" style="color: #007bff;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; background-color: #f1f1f1; font-weight: bold;">Message</td>
                  <td style="padding: 8px; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
                    <p>${data.message.replace(/\n/g, "<br>")}</p>
                  </td>
                </tr>
              </table>
              <hr style="border: 1px solid #eee; margin-top: 30px;" />
              <p style="font-size: 12px; color: #888; text-align: center;">This message was sent from your website contact form.</p>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}
