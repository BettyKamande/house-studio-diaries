import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
    const {name, address, email, phone, preferredContact, referral} = await req.json();
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {
            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `[Action Required] - House Diaries Studio `,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Address: ${address} </p>
            <p>Preferred Contact: ${preferredContact} </p>
            <p>How did you hear about us: ${referral} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "COULD NOT SEND MESSAGE" },
            {status: 500}
        )
    }
    // return NextResponse.json();
  }