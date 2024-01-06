import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import moment from 'moment-timezone'

export async function GET() {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    // const date = new Date();
    try {
        await connectMongoDB();
        const originalDate = moment.tz(new Date(), "Asia/Kolkata");
        // const originalDate = moment.utc(appointmentDate);
        const standardDate = originalDate.format("MMMM Do YYYY");
        const Appointment = await appointment.find({ AppointmentDate: standardDate }).sort({ createdAt: -1 });
        return NextResponse.json({ Appointment })
    } catch (error) {
        console.log("something went wrong"+error);
    }
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await appointment.findByIdAndDelete(id);
  
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }