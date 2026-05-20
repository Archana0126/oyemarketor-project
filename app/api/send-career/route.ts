import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials' },
        { status: 500 }
      );
    }

    const { name, email, phone, position, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !position || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CAREERS_EMAIL || process.env.GMAIL_USER,
      subject: `New Career Application from ${name} - ${position}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied:</strong> ${position}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Email to applicant
    const applicantMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Application Received - Vibgyor Inframech',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for your interest in joining Vibgyor Inframech. We have received your application for the <strong>${position}</strong> position.</p>
        <p>Our HR team will review your application and contact you shortly if your profile matches our requirements.</p>
        <br>
        <p>Best regards,<br>Vibgyor Inframech - Careers Team</p>
      `,
    };

    // Verify transporter
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw verifyError;
    }

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(applicantMailOptions);

    // Store application in response (client will handle localStorage)
    const application = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      position,
      message,
      submittedAt: new Date().toISOString(),
      type: 'career',
    };

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully', application },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to submit application', details: errorMessage },
      { status: 500 }
    );
  }
}
