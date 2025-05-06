import express from 'express'
import authUser from '../middlewares/authuser.js';
const roomRouter = express.Router();
import Room from '../models/room.model.js';
import Chat from '../models/chat.model.js';

roomRouter.get('/:roomId/chat',authUser,async(req,res)=>{
    const {roomId} = req.params
    const userId = req.userId;
    try {
        
    } catch (error) {
        res.status(400).json({status:false,message:error.message})
    }
})

roomRouter.post("/create",authUser,async(req,res)=>{
    const {roomId,name} = req.body;
    try {
        await Room.create({
            roomId,
            name,
            clients:[{userId:req.userId}]
        })

    } catch (error) {
        res.status(400).json({status:false,message:error.message})
    }
})

roomRouter.post("/invite",authUser,async(req,res)=>{
    const {roomId} = req.body;
    try {
        const roomIdExits = await Room.findOne({roomId});
        if(!roomIdExits){
            return res.status(404).json({ status: false, message: "Room not found" });
        }
        if (!roomIdExits.clients.includes(req.userId)) {
            roomIdExits.clients.push(req.userId);
            await roomIdExits.save();
        }      
        res.status(200).json({ status: true, message: "User added to room" });
    } catch (error) {
        res.status(400).json({status:false,message:error.message})
    }
})