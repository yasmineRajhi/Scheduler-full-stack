import Event from "../models/event.js";

/* CREATE */
export const createEvent= async (req,res) => {
    try {
        const {userId, Title, Date} = req.body;
        const newEvent = new Event({
            userId,
            Title,
            Date,
            Type,
            Notes,
            FilePath
        });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

/* READ */
export const getAllEvents = async (req,res) => {
    try {
        const event = await Event.find();
        res.status(201).json(event);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getUserEvents = async (req, res) => {
    try {
        const { userId } = req.params;
        const event = await Event.find({ userId });
        res.status(201).json(event);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}