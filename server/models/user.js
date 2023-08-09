import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
    },
    picture_path: {
      type: String,
      default: "",
    },
    ROLE: {
      type: String,
      default: "ROLE_CLIENT",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;