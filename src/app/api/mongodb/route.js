import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import user from "@/models/schema";
import bcrypt from 'bcryptjs'
import { getSession } from "next-auth/react";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getSession(authOptions);
  const data = session?.user?.role;
  const { name,lastname,email,password,contactnumber,dob,gender,address,role} = await request.json();
  await connectMongoDB();
  const hasPassword = await bcrypt.hash(password,10);
  await user.create({ name,lastname,email,password:hasPassword,contactnumber,dob,gender,address,role});
  return NextResponse.json({ message: "sucessfull created" }, { status: 201 });
}

export async function GET() { 
  await connectMongoDB();
  const patientDetails = await user.find({role:"user"});
  return NextResponse.json({patientDetails});
}