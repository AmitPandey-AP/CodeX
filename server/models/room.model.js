import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roomId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true, minimize: false }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
