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

    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Email to user
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your inquiry - Vibgyor Inframech',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Vibgyor Inframech. We have received your inquiry and will get back to you shortly.</p>
        <p>Our team will review your message and contact you at the provided phone number or email address.</p>
        <br>
        <p>Best regards,<br>Vibgyor Inframech Team</p>
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
    await transporter.sendMail(userMailOptions);

    // Store lead in response (client will handle localStorage)
    const lead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
      type: 'contact',
    };

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', lead },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}
