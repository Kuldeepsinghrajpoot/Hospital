import { NextResponse } from "next/server";
import connectMongoDB from "../../../../db/mongodb";
import user from "../../../../models/appointment";



export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const printAppointment = await user.findOne({ _id: id });
  return NextResponse.json({ printAppointment }, { status: 200 });
}