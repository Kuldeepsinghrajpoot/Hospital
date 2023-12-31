import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({

    Name: String,
    AppointmentId: { type: Number },
    Doctor: String,
    AppointmentDate: Date,
    Phone: String,
    Gender: String,
    UserId: String,
    Age: String,
    Address: String,

}, { timestamps: true });
const appointment = mongoose.models.appointment || mongoose.model("appointment", patientSchema);
export default appointment