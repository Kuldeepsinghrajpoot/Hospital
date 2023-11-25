// import { NextResponse } from "next/server";
// import connectMongoDB from "../../../db/mongodb";
// import User from "@/models/schema";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
// import bcrypt from "bcryptjs";

// export async function GET() {

//     const sessionid = await getServerSession(authOptions);
//     const userid = sessionid?.user?.id;
//     try {
//         await connectMongoDB();
//         const userinfo = await user.find({ _id: userid });
//         return NextResponse.json(userinfo)
//     } catch (error) {
//         console.log(error);
//     }
// }
// export async function PUT(request) {
//     const sessionid = await getServerSession(authOptions);
//     const id = sessionid?.user?.id;
//         const userinfo = await User.find({id: id });

//     // const passwordsMatch = await bcrypt.compare(currentPassword, user.password);
    
//     const { confirmPassword:password} = await request.json();
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     await connectMongoDB();
//     const user = await User.findByIdAndUpdate(id, {password:hashedPassword}, { new: true });
//     return NextResponse.json({ message: hashedPassword}, { status: 200 });
// }
import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import User from "@/models/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import bcrypt from "bcryptjs";


export async function PUT(request) {
    const sessionid = await getServerSession(authOptions);
    const id = sessionid?.user?.id;
    
    // const passwordsMatch = await bcrypt.compare(currentPassword, user.password);
    
    const { confirmPassword:password,userid} = await request.json();
    // const userinfo = await User.findById({_id:userid});
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const user = await User.findByIdAndUpdate(id, {password:hashedPassword}, { new: true });
    return NextResponse.json({ message: "update password"}, { status: 200 });
}
