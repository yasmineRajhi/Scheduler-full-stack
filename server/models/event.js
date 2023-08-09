import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
    {
        userId : {
            type: String,
            required: true,
        },
        Title: {
            type: String,
            required: true,
        },
        Date : {
            type: Date,
            required: true,
        },
        Type: {
            type: String,
            required: true,
        },
        Notes: String,
        FilePath: String
    },
    { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;