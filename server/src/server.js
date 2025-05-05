import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import http from 'http'
import {Server} from 'socket.io'

 
import userRouter from "../routes/user.route.js";
import connectDB from "../configs/dbConnection.js";
import Chat from "../models/chat.model.js";
import connectCloudinary from "../configs/cloudinary.js";

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = ["http://localhost:5173"];

await connectDB();
await connectCloudinary()

// Middleware configration

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("API is working");
});

// app.use("/api/user", userRouter);

// // create server
// const server = http.createServer(app);
// const io = new Server(server,{
//   cors:{
//     origin:"*"
//   }
// })

// io.on("connection",(socket)=>{
//   console.log("User Connected Successfully");

//   // join user
//   socket.on('join-room',(roomId)=>{
//     socket.join(roomId);
//     console.log(`This roomId added`)
//   })
//   socket.on('sendMessage',async ({text,roomId})=>{
//     // const chat = await Chat.findOne({roomId});
//     // if(!chat){
//     //   const newChat = await Chat.create({
//     //     roomId,
//     //     messages:[{
//     //       senderId,
//     //       text
//     //     }]
//     //   })
//     // }else{
//     //   let newChat = await Chat.findOne({roomId})
//     //   newChat.messages.push({senderId,text})
//     //   await newChat.save()
//     // }
//     socket.to(roomId).emit("messageReceived",{text})
//   })
//   socket.on('disconnect',()=>{
//     console.log('user disconnected');
//   })
// })

app.listen(port, () => {
  console.log(`server is Running on http://localhost:${port}`);
});