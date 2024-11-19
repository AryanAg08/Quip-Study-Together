import mongoose, { Schema } from "mongoose";
import schedule from "node-schedule";

// Define the schema
const studySchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    tempUserID: {
        type: String,
        required: true,
    },
    roomID: {
        type: String,
    },
    studyTime: {
        type: Number,
        required: false,
    },
    JoinedAt: {
        type: String,
        required: false,
    },
    Daily: {
        type: Number,
        required: false,
        default: 0,
    },
    AllTime: {
        type: Number,
        required: false,
        default: 0,
    },
    Points: {
        type: Number,
        required: false,
    },
    Streak: {
        type: Number,
        required: false,
    },
    StreakDay: {
        type: String,
        required: false,
    },
});


const Study = mongoose.model("Study", studySchema);

export default Study;


schedule.scheduleJob("0 0 * * *", async () => {
    try {
        const result = await Study.updateMany({}, { $set: { Daily: 0 } });
        console.log(`Midnight reset successful. Records updated: ${result.modifiedCount}`);
    } catch (error) {
        console.error("Error resetting Daily field at midnight:", error);
    }
});

console.log("Scheduled midnight reset for Daily field is active.");
