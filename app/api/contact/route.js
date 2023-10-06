import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/utils/nodemailer";

import { Email } from "@/components/email";

export async function POST(req, res) {
    const body = await req.json();
    const { name, email, message } = body;
    // console.log(name, email, message)

    const emailHtml = render(
        <Email name={name} email={email} message={message} />
    );

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: "New Form Submission",
        html: emailHtml,
    };


    try {
        // Send email using the transporter
        await transporter.sendMail(options);
        console.log('succses')
    } catch (error) {
        console.error("Failed to send email:", error);
    }
    return new Response("OK");
}