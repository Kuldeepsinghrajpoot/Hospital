import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import appointment from "@/models/appointment";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function GET() {

    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    
    // const token = req.headers.authorization;
    try {
      
        await connectMongoDB();
        
        const Appointment = await appointment.find({UserId:id});
        return NextResponse.json({ Appointment })

    } catch (error) {
        console.log(error);
    }
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    console.log("this is id",id);
    await appointment.findByIdAndDelete(id);
  
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }