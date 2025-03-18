// app/api/contact/route.ts

import { NextResponse } from "next/server";
import Contact from "@/lib/models/Contact";
import nodemailer from "nodemailer";
import { connectToDB } from "@/lib/mongoDB";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

// POST API for Contact Form Submission
export async function POST(req: Request) {
  try {
    await connectToDB();
    const { name, email, phone, message }: ContactFormData = await req.json();

    // Save to Database
    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    // Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "darsh@roundtechsquare.com, minakshi@roundtechsquare.com",
      subject: "New Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message || "No message provided."}</p>`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}

// GET API to fetch all contact messages
export async function GET() {
  try {
    await connectToDB();
    const contacts = await Contact.find();
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json({ message: "Failed to fetch messages" }, { status: 500 });
  }
}
