import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request) {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    const { Name, Appointment, Doctor, Status, Problem, AppointmentDate, Phone, Email,Age } = await request.json()
    await connectMongoDB();
    await appointment.create({ Name, Appointment, Doctor, Status, Problem, AppointmentDate, Phone, Email, UserId:id ,Age});
    return NextResponse.json({ message: "successfull created" }, { status: 201 })
}
export async function GET() {

    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    // const token = req.headers.authorization;
    try {
        // const decoded = jwtDecode(theme);
        await connectMongoDB();
        
        const Appointment = await appointment.find({UserId:id});
        return NextResponse.json({ Appointment })

    } catch (error) {
        console.log(error);
    }
}