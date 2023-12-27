import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import connectMongoDB from "@/db/mongodb";
import img from './favicon.ico'
import User from '@/models/schema'
import Cryptr from 'cryptr'
import cryptoRandomString from 'crypto-random-string'
// async..await is not allowed in global scope, must use a wrapper
export async function POST(request) {
  await connectMongoDB();
  const { email } = await request.json();
  const user = await User.findOne({ email });

  if (user.email!==email) {
    return NextResponse.json({ message: "User not found" });
  }
  const cryptr = new Cryptr(process.env.NEXTAUTH_SECRET);
  const encrypted_email = cryptr.encrypt(user.email)
  const random = cryptoRandomString({ length: 64, type: 'alphanumeric' });
  try {
    user.token = random;
    await user.save();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: 587,
      secure: false,
      auth: {
        user: process.env.LOGIN,
        pass: process.env.EMAIL_PASSWORD
      },
    });
const url = `${process.env.URI}/resetpassword/${encrypted_email}/?signature=${random}`;
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.LOGIN, // sender address
      to: user.email, // list of receivers
      subject: "Reset password ", // Subject line
      html: `<!DOCTYPE html>
        <html
        lang="en">
        <head>
        <meta
        charset="UTF-8">
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"> 
        <title>Recover your password on Uday Clinic</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              color:black
            }
            .container {
              padding: 20px;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
            .logo image{
                width:100px;
                height:100px;
            }
            .message {
              line-height: 1.5;
            }
            .button {
              background-color: #007bff;
              border: none;
              color: white;
              padding: 10px 20px;
              text-align: center;
              display: block;
              margin: 20px auto;
              cursor: pointer;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img src=${img} alt="Uday Clinic" />
              <h1>Uday Clinic</h1>
            </div>
            <h2 class="message">Hi Kuldeep Singh Rajpoot,</h2>
            <p class="message">We received a request to reset your password for your account on Uday Clinic.</p>
            <p class="message">If you requested this password reset, click the button below to choose a new password:</p>
            <a href=${url} class="button">Reset Password</a>
            <p class="message">This link will expire in 24 hours. If you did not request this password reset, please ignore this email and your password will remain unchanged.</p>
            <p class="message">Thanks,</p>
            <p class="message">The Uday Clinic Team</p>
          </div>
        </body>
        </html>`
    });
    return NextResponse.json(info.messageId)
  } catch (error) {
    console.log("\nerror on token", error);
    return NextResponse.json({ message: "Error updating token" });
  }
}




export async function PUT(request) {
  // const passwordsMatch = await bcrypt.compare(currentPassword, user.password);
  const { confirmPassword: password, userid } = await request.json();
  // const userinfo = await User.findById({_id:userid});
  const hashedPassword = await bcrypt.hash(password, 10);
  await connectMongoDB();
  const user = await User.findByIdAndUpdate(userid, { password: hashedPassword }, { new: true });
  return NextResponse.json({ message: "update password" }, { status: 200 });
}