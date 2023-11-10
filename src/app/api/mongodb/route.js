import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import patientschema from "@/models/schema";
import bcrypt from 'bcryptjs'
export async function POST(request) {
  const { FirstName,LastName,Email,password,ContactNumber,DOB,Gender,Address,Problem,} = await request.json();
  await connectMongoDB();
  const hasPassword = await bcrypt.hash(password,10);
  await patientschema.create({ FirstName,LastName,Email,password:hasPassword,ContactNumber,DOB,Gender,Address,Problem});
  return NextResponse.json({ message: "sucessfull created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const patientDetails = await patientschema.find();
  return NextResponse.json({patientDetails});
}