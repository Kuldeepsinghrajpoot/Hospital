import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
    await connectMongoDB();
    const Appointment = await appointment.find({});
    return NextResponse.json({Appointment});
  }
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await appointment.findByIdAndDelete(id);
  
    return NextResponse.json({ message: "Patient Deleted" }, { status: 200 });
  }
