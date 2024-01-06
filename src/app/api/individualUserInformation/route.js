import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import user from "@/models/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id")
  try {

      await connectMongoDB();

      const Appointment = await user.find({_id:id});
      return NextResponse.json({ Appointment })

  } catch (error) {
      console.log(error);
  }
}
export async function PUT(request) {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    const { FirstName: name, LastName: lastname, Email: email, ContactNumber: contactnumber, DOB: Age, Gender: gender, Address: address } = await request.json();
    await connectMongoDB();
    await user.findByIdAndUpdate(id, { name, lastname, email, contactnumber, Age, gender, address });
    return NextResponse.json({ message: "Profile is  updated" }, { status: 200 });
}