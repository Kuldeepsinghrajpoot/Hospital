import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({

    Name: String,
    Appointment: Number,
    Doctor: String,
    Status: String,
    Problem: String,
    AppointmentDate: Date,
    Phone: String,
    Email: String,
    DOB:Date,
    Gender:String,
    UserId:String,
    Age:String
}, {
    timeseries: true
});
const appointment = mongoose.models.appointment|| mongoose.model("appointment",patientSchema);
export default appointment