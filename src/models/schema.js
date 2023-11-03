import mongoose,{Schema} from "mongoose";
// patation registration
const patient = new Schema({
    FirstName:{type:String,require:true},
    LastName:String,
    Email:String,
    password:String,
    ConfirmPassword:String,
    ContactNumber:String,
    DOB:Date,
    Gender:String,
    Address :String,
    Problem:String,
    // SymptomOnsetDate:date,
    // PriviousTreatments :String,
    // Allegries:String,
    // CurrentMedication :String,
    // MedicalHistory :String,
    // FamilyMedicalHistory :String
},{
    timestamps:true
});

const user = mongoose.models.User|| mongoose.model("User",patient);
export default user