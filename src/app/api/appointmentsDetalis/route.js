import { NextResponse } from "next/server";
import connectMongoDB from "@/db/mongodb";
import appointment from "@/models/appointment";

export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id");
   
    await connectMongoDB();
    try {

        const Appointment = await appointment.find({ UserId: id });
        return NextResponse.json({ Appointment })

    } catch (error) {
        console.log(error);
    }
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    console.log("this is id", id);
    await appointment.findByIdAndDelete(id);

    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}