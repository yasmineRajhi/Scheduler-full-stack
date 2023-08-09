import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import eventRoutes from "./routes/events.js";
import {register} from "./controllers/auth.js"
import {createEvent} from "./controllers/events.js"
import { verifyToken } from "./middleware/auth.js";
import User from "./models/user.js";
import Event from "./models/event.js";
import { users, events } from "./data/index.js";

/* Middleware Config */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit : "30mb", extended : true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null,"public/assets");
    },
    filename : function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/events", verifyToken, createEvent);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/events", eventRoutes);

/* MONGOOSE SET UP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
    
    /* Data Insert ONE TIME */
//    User.insertMany(users);
//    Event.insertMany(events);

}).catch((error)=>console.log(`${error} did not connect`))