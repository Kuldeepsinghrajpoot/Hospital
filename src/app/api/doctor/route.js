import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import user from "@/models/schema";
import bcrypt from 'bcryptjs'
export async function POST(request) {
  const {name,lastname,email,password,contactnumber,dob,gender,address,role} = await request.json();

  await connectMongoDB();
  const hasPassword = await bcrypt.hash(password,10);
  await user.create({ name,lastname,email,password:hasPassword,contactnumber,dob,gender,address,role});
  return NextResponse.json({ message: "sucessfull created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const doctor = await user.find();
  return NextResponse.json({doctor});
}