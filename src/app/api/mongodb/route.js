import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import user from "@/models/schema";
import bcrypt from 'bcryptjs'


export async function POST(request) {

  const { name, lastname, email, password, contactnumber, Age, gender, address, role } = await request.json();
  await connectMongoDB();
  const find_email = await user.findOne({email});
  if(find_email){
      return NextResponse.json({status:403})
  }
  const hasPassword = await bcrypt.hash(password, 10);
  await user.create({ name, lastname, email, password: hasPassword, contactnumber, Age, gender, address, role });
  return NextResponse.json({ message: "sucessfull created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const patientDetails = await user.find({ role: "user" });
  return NextResponse.json({ patientDetails });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await user.findByIdAndDelete(id);

  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}