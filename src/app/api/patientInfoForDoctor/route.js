import { NextResponse } from "next/server";
import connectMongoDB from "@/db/mongodb";
import appointment from "@/models/appointment";

export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id")
    try {
  
        await connectMongoDB();
  
        const Appointment = await appointment.find({Doctor:id});
        return NextResponse.json( Appointment )
  
    } catch (error) {
        console.log(error);
    }
  }
