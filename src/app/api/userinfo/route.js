import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";

export async function GET() {
    try {
        await connectMongoDB();        
        const Appointment = await appointment.find();
        return NextResponse.json({ Appointment })
    } catch (error) {
        console.log(error);
    }
}