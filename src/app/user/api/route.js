import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// import moduleName from ''
export async function POST(request) {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;

    const { Name, Doctor, AppointmentDate, Phone, Age, Gender, Address } = await request.json()
    await connectMongoDB();
   
    const date = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const standardDate = new Date(AppointmentDate).toLocaleDateString('en-US', date);
    await appointment.create({ Name, Doctor, AppointmentDate:standardDate, Phone, UserId: id, Age, Gender, Address });
    return NextResponse.json({ message: "successfull created" }, { status: 201 })
}
export async function GET() {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    try {
        await connectMongoDB();
        const Appointment = await appointment.find({ UserId: id });
        return NextResponse.json({ Appointment })
    } catch (error) {
        console.log(error);
    }
}