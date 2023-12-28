import { NextResponse } from "next/server";
import connectMongoDB from "@/db/mongodb";
import Doctor from "@/models/appointment";
import Schema from "@/models/schema";

export async function GET() {
  await connectMongoDB();
  const doctor = await Schema.find({role:"Doctor"}).count();
  const admin = await Schema.find({role:"Admin"}).count();
  const user = await Schema.find({role:"user"}).count();


  const patient = await Doctor.find({}).count();

  return NextResponse.json({doctor,user,admin,patient});
}