import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import patientschema from "@/models/schema";

export async function POST(request) {
  const { FirstName,LastName,Email,password,ContactNumber,DOB,Gender,Address,Problem,} = await request.json();
  await connectMongoDB();
  await patientschema.create({ FirstName,LastName,Email,password,ContactNumber,DOB,Gender,Address,Problem});
  return NextResponse.json({ message: "sucessfull created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const patientDetails = await patientschema.find();
  return NextResponse.json({patientDetails});
}