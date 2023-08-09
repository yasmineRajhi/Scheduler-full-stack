import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../models/user.js";

/* REGISTER USER */

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, picture_path, ROLE } =
      req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picture_path,
      ROLE,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGIN */

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid creds!" });
    const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: err.message() });
  }
};
