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
    token: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const User = models.user || mongoose.model("user", userSchema);
export default User;
