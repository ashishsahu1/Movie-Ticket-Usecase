import express from "express";
import { getAllUser, signup, login, adminlogin } from "../controllers/user-controller";

const userrouter = express.Router();

userrouter.get("/", getAllUser);
userrouter.post("/signup", signup);
userrouter.post("/login", login);

// admin routes
userrouter.post("/admin/login",adminlogin);

export default userrouter;
