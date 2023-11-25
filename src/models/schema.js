import mongoose, { Schema } from "mongoose";
// patation registration
const user = new Schema({
    name: {
        type: String, require: true
    },
    lastname: String,
    email: String,
    password: String,
    confirmpassword: String,
    contactnumber: String,
    dob: Date,
    gender: String,
    address: String,
    problem: String,
    role: String
}, {
    timestamps: true
});

const User = mongoose.models.user || mongoose.model("user", user);
export default User