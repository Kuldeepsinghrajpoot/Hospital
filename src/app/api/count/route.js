import { NextResponse } from "next/server";
import connectMongoDB from "@/db/mongodb";
import appointment from "@/models/appointment";
import Schema from "@/models/schema";

export async function GET() {
  await connectMongoDB();
  const doctor = await Schema.find({role:"Doctor"}).countDocuments();
  ;
  const admin = await Schema.find({role:"Admin"}).countDocuments();
  ;
  const user = await Schema.find({role:"user"}).countDocuments();
  ;
  const patient = await appointment.find({}).countDocuments();
  ;

  return NextResponse.json({doctor,user,admin,patient});
}