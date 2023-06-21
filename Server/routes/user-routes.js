import express from "express";
import { getAllUser, signup, login, adminlogin, deleteUser, getUserById } from "../controllers/user-controller";

const userrouter = express.Router();

userrouter.get("/", getAllUser);
userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.delete("/:id",deleteUser);
userrouter.get("/:id",getUserById);

// admin routes
userrouter.post("/admin/login",adminlogin);

export default userrouter;
