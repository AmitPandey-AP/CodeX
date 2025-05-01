import express from "express";
import {
  register,
  login,
  logout,
  addAvatar,
} from "../controllers/user.controller.js";
import authUser from "../middlewares/authuser.js";
import { upload } from "../configs/multer.js";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/logout", authUser, logout);
userRouter.post("/avatar", authUser, upload.single("avatar"), addAvatar);

export default userRouter;
