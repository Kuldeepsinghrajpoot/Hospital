import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import Doctor from "@/models/schema";
import bcrypt from 'bcryptjs'
export async function POST(request) {
  const {name,lastname,email,password,contactnumber,dob,gender,address,role} = await request.json();

  await connectMongoDB();
  const find_email = await Doctor.findOne({email});
  if(find_email){
      return NextResponse.json({status:409,message: "Email already exists" })
  }
  const hasPassword = await bcrypt.hash(password,10);
  await Doctor.create({ name,lastname,email,password:hasPassword,contactnumber,dob,gender,address,role});
  return NextResponse.json({ message: "sucessfull created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const doctor = await Doctor.find({role:"Doctor"});
  return NextResponse.json({doctor});
}