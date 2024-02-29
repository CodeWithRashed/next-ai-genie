import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
// Main POST function
export async function POST(request: NextRequest) {
  try {
  
    // Parse the request body
    const reqBody = await request.json();
    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {

            return process.exit(1);
        }
    

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });
    
        // Message object
        let message = {
            from: 'Sender Name <sender@example.com>',
            to: 'Recipient <recipient@example.com>',
            subject: 'Nodemailer is unicode friendly ✔',
            text: 'Hello to myself!',
            html: '<p><b>Hello</b> to myself!</p>'
        };
    
        transporter.sendMail(message, (err, info) => {
            if (err) {
                return process.exit(1);
            }
    
        });
    });
    return NextResponse.json({
      success: "Request Received",
      code: 200,
      
    });
  } catch (error) {

    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
