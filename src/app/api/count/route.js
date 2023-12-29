import { NextResponse } from "next/server";
import connectMongoDB from "@/db/mongodb";
import appointment from "@/models/appointment";
import Schema from "@/models/schema";

export async function GET() {
  await connectMongoDB();
  const doctor = await Schema.find({role:"Doctor"}).count({role:"Doctor"});
  const admin = await Schema.find({role:"Admin"}).count({role:"Admin"});
  const user = await Schema.find({role:"user"}).count({role:"user"});
  const patient = await appointment.find({}).count('name');

  return NextResponse.json({doctor,user,admin,patient});
}