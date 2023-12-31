import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongodb";
import AppointmentModel from "@/models/appointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import counter from '@/models/counter'

async function getNextAppointmentId() {
    await connectMongoDB()
    const countersCollection = counter.findOne({});

    const result = await countersCollection.findOneAndUpdate(
        { id: 'appointmentIdCounter' },
        { "$inc": { seq: 1 } },
        { upsert: true,  new:true,returnDocument: 'after' }
    );

    return result.seq;
}

export async function POST(request) {
    let db;
    try {
        const sessionid = await getServerSession(authOptions);
        const id = sessionid?.user?.id;

        const { Name, Doctor, AppointmentDate, Phone, Age, Gender, Address } = await request.json();
        db = await connectMongoDB();

        const nextAppointmentId = await getNextAppointmentId();

        const date = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const standardDate = new Date(AppointmentDate).toLocaleDateString('en-US', date);

        await AppointmentModel.create({
            Name,
            Doctor,
            AppointmentDate: standardDate,
            Phone,
            UserId: id,
            Age,
            Gender,
            Address,
            AppointmentId: nextAppointmentId,
        });

        return NextResponse.json({ message: "Successfully created" }, { status: 201 });
    } catch (error) {
        console.error('Error in POST:', error);
        return NextResponse.json({ message: "Error occurred while creating appointment" }, { status: 500 });
    } finally {
        if (db) {
            await db.close(); // Close the MongoDB connection in a finally block
        }
    }
}

export async function GET() {
    let db;
    try {
        const sessionid = await getServerSession(authOptions);
        const id = sessionid?.user?.id;

        db = await connectMongoDB();
        const Appointments = await AppointmentModel.find({ UserId: id });

        return NextResponse.json({ Appointments });
    } catch (error) {
        console.error('Error in GET:', error);
        return NextResponse.json({ message: "Error occurred while fetching appointments" }, { status: 500 });
    } finally {
        if (db) {
            await db.close(); // Close the MongoDB connection in a finally block
        }
    }
}
