import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function GET() {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    // const date = new Date();
    try {
        await connectMongoDB();
        const date = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const standardDate = new Date().toLocaleDateString('en-US', date);
        const Appointment = await appointment.find({ AppointmentDate: standardDate }).sort({ createdAt: -1 });
        return NextResponse.json({ Appointment })
    } catch (error) {
        console.log("something went wrong"+error);
    }
}