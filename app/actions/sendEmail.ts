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
    from: "query@watchbox.techsol-bh.com",
    to: "info@techsol-bh.com",
    cc: ["m.ali@techsol-bh.com", "themodventures2023@gmail.com"],
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    html: `
      <div 
        style="border: 1px solid #eee; font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;"
      >
        <h2 
          style="margin-top: 0px; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 1px solid #eee; background-color: #F5F7F9; padding: 20px 20px;"
        >
          New Contact Form Submission
        </h2>
        
        <div style="padding: 20px 0px 20px 0px;">
          <p style="font-size: 16px; margin-bottom: 20px; text-align: center;">
            Hi <strong>Admin</strong>,
          </p>
          
          <p 
            style="font-size: 16px; margin-bottom: 20px; text-align: center; padding: 0px 75px; line-height: 26px;"
          >
            You have received a new message from the contact form on your website techsol. Here are the details:
          </p>
          
          <table style="width: 100%; border-collapse: collapse; background-color: #fafafa;">
            <tr>
              <td 
                style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd; width: 30%;"
              >
                Full Name
              </td>
              <td 
                style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right; width: 70%;"
              >
                ${data.firstName} ${data.lastName}
              </td>
            </tr>
            
            <tr>
              <td 
                style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd; width: 30%;"
              >
                Email
              </td>
              <td 
                style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right; width: 70%;"
              >
                <a 
                  href="mailto:${data.email}" 
                  style="color: #333; text-decoration: none;"
                >
                  ${data.email}
                </a>
              </td>
            </tr>
            
            <tr>
              <td colspan="2" style="padding: 10px; font-weight: bold;">
                Message
              </td>
            </tr>
            
            <tr>
              <td colspan="2" 
                style="padding: 10px; border-bottom: 1px solid #ddd; text-align: left;"
              >
                ${data.message}
              </td>
            </tr>
          </table>
        </div>
      </div>
    `,
  });
}
