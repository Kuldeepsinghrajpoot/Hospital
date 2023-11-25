import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
 
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name:{
      type:String,
      required:true
    },
    role:{
      type:String,
      required:true
    }

    
  },
  { timestamps: true }
);

const User = models.user || mongoose.model("user", userSchema);
export default User;
