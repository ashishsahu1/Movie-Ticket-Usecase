import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import * as dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "15m" });
};

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (existingUser) {
    return res.status(400).json({
      message: "User already Exists",
    });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const isadmin = false;
  const user = new User({
    name,
    email,
    password: hashedPassword,
    isadmin,
    bookings: [],
  });

  let token = "";
  try {
    await user.save();
    token = generateToken(user);
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user, token });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldn't Find User By This Email" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  console.log(bcrypt.decodeBase64(password));
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = generateToken(existingUser);
  const expiresin = 900;
  return res
    .status(200)
    .json({ message: "Login success", existingUser, token, expiresin });
};

// ----------- Admin APIs -----------

export const adminlogin = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldn't Find User By This Email" });
  }

  if (existingUser.isadmin == false) {
    return res
      .status(401)
      .json({ message: "User doesn't have admin permission" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  console.log(bcrypt.decodeBase64(password));
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = generateToken(existingUser);
  const expiresin = 900;
  return res
    .status(200)
    .json({ message: "Login success", existingUser, token, expiresin });
};

// ************* HELPER APIS ***************

export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
};

export const getUserById = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const getUser = await User.findById(userId);

    if (!getUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({getUser});
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while getting the user" });
  }
};
