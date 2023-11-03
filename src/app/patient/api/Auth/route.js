import { NextResponse } from "next/server";
import connectMongoDB from "../../../../db/mongodb";

import User from "@/models/schema";

export async function POST(request) {
    const { Email,password } = await request.json()
    await connectMongoDB();
    const User_Data = await User.findOne({Email:Email});

if (User_Data.Email==Email && User_Data.password==password) {
    // console.log("suceesfull");
    return NextResponse.json({ message: "successfull created" }, { status: 201 })
}else{
    // console.log("failed"+User_Data);
    return NextResponse.json({ message: "unsuceesfull" }, { status: 500 })

}
    // await appointment.create({ Name, Appointment, Doctor, Status, Problem, Date, Phone, Email, UserId });

}