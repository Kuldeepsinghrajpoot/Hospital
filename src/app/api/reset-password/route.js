import Cryptr from 'cryptr'
import { NextResponse } from "next/server";
import connectMongoDB from '@/db/mongodb'
import User from '@/models/schema'
import bcrypt from 'bcryptjs'
export async function POST(request) {
    await connectMongoDB();
    const { email, token, password } = await request.json();
    const cryptr = new Cryptr(process.env.NEXTAUTH_SECRET);
    const decryptedEmail = cryptr.decrypt(email);
    const hasPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.findOne({ email: decryptedEmail });
        
        if (!user.token && user.email) {
            // console.log("token", user.token);
            return NextResponse.json({ message: "invalid token" }, { status: 404 })
        }
        else if (user.token && user.email) {
            user.password = hasPassword;
            // console.log('user name inside', user);
            user.token = null
            await user.save();
            return NextResponse.json({ status: 200 })
        } else {
            return NextResponse.json({ message: 'invalid token' }, { satus: 404 })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({"Some thing went wrong":error,status:404})
    }
}