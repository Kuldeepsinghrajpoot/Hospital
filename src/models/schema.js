import mongoose, { Schema } from "mongoose";
// patation registration
const user = new Schema({
    name: {
        type: String, require: false
    },
    lastname: String,
    email: String,
    password: String,
    confirmpassword: String,
    contactnumber: String,
    Age: String,
    gender: String,
    address: String,
    problem: String,
    role: String,
    token:String
}, {
    timestamps: true
});

const User = mongoose.models.user || mongoose.model("user", user);
export default User