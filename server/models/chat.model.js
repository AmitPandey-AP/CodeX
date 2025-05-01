import mongoose from "mongoose";
import User from "./user.model.js";
const message = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    text:{
        type:String,
        required:true
    }
})
const chatSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  messages: [message],
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;