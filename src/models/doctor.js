import mongoose, { Schema } from 'mongoose'

const Doctor = new Schema({

    name: { 
        type: String, 
        require: true 
    },
    lastname: { 
        type: String, 
        require: true 
    },
    email: { 
        type: String, 
        require: true 
    },
    password: {
         type: String, 
         require: true 
    },
    contactnumber: { 
        type: String, 
        require: true 
    },
    dob: { 
        type: String,
        require: true 
    },
    gender: { 
        type: String,
        require: true 
    },
    address: { 
        type: String, 
        require: true 
    },
    role: { 
        type: String, 
        require: true 
    },
},{
    timestamps:true
})

const doctorSchema = mongoose.models.doctor|| mongoose.model("doctor",Doctor);
export default doctorSchema