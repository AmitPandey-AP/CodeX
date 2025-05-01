import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength:4,
      maxLength:20
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
        type:String,
        default:""
    }
  },
  { timestamps:true, minimize: false }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;