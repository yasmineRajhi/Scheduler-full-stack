import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    ROLE:"ROLE_ADMIN",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    ROLE:"ROLE_USER",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    ROLE:"ROLE_CLIENT",
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  }
];

export const events = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    Title: "Event_1",
    Date: 1288090662,
    Type: "test",
    Notes: "Some really long random description",
    filePath: "post1.jpeg"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    Title: "Event_2",
    Date: 1288090662,
    Type: "test_2",
    Notes: "Some really long random description",
    filePath: "post2.jpeg"
  }
];