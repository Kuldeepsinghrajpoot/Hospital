import { NextResponse } from "next/server";
import connectMongoDB from "../../../../db/mongodb";
import User from "@/models/schema";
import jwt from 'jsonwebtoken';
export async function POST(request) {
    const { Email,password } = await request.json()
    await connectMongoDB();
    const User_Data = await User.findOne({Email:Email});

if (User_Data.Email===Email && User_Data.password===password) {
    // console.log("suceesfull");
    // localStorage.setItem({Email:Email})
    const token = jwt.sign({email:User_Data.Email,id:User_Data.id}, process.env.SECRET_KEY);
    return NextResponse.json({token})
}else{
    // console.log("failed"+User_Data);
    return NextResponse.json({ message: "unsuceesfull" }, { status: 500 })

}
    // await appointment.create({ Name, Appointment, Doctor, Status, Problem, Date, Phone, Email, UserId });

}