import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";

export async function POST(request) {
    const { Name, Appointment, Doctor, Status, Problem, Date, Phone, Email, UserId } = await request.json()
    await connectMongoDB();
    await appointment.create({ Name, Appointment, Doctor, Status, Problem, Date, Phone, Email, UserId });
    return NextResponse.json({ message: "successfull created" }, { status: 201 })
}
export async function GET() {
    try {
        await connectMongoDB();
        const Appointment = await appointment.find({UserId:'654146d2a5099fdb817a2084'});
        return NextResponse.json({ Appointment })

    } catch (error) {
        console.log(error);
    }
}