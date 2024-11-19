import Study from "../models/study.model.js";

export async function JoinedStudyRoom(email, userId, roomId) {
    const Time = new Date().getTime();
    const currentDate = new Date().toDateString();

    const existingUser = await Study.findOne({ email });

    let updatedStreak = 1; 
    let updatedStreakDay = currentDate;

    if (existingUser) {
        const { Streak = 0, StreakDay = null } = existingUser;

        if (Streak > 0 && StreakDay) {
            const lastActiveDate = new Date(StreakDay);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastActiveDate.toDateString() === yesterday.toDateString()) {
                updatedStreak = Streak + 1;
            } else if (lastActiveDate < yesterday) {
                 updatedStreak = 0;
            }
        }
    }

    const T1 = await Study.findOneAndUpdate(
        { email },
        {
            email,
            JoinedAt: Time,
            tempUserID: userId,
            roomID: roomId,
            Streak: updatedStreak,
            StreakDay: updatedStreakDay,
        },
        { upsert: true, new: true }
    );

    console.log(T1);
}

export async function DisconnectedStudyRoom(email) {
    const currentTime = new Date().getTime();

    const userRecord = await Study.findOne({ email });

    if (!userRecord) {
        console.log(`User with email ${email} not found.`);
        return;
    }

    const { JoinedAt, Daily = 0, AllTime = 0 } = userRecord;

    if (!JoinedAt) {
        console.log(`No active session found for user with email ${email}.`);
        return;
    }

    const timeSpent = currentTime - JoinedAt;

    if (timeSpent <= 0) {
        console.log(`Invalid session duration for user with email ${email}.`);
        return;
    }

    const timeSpentInMinutes = Math.floor(timeSpent / 1000 / 60);

   const updatedDaily = Daily + timeSpentInMinutes;
    const updatedAllTime = AllTime + timeSpentInMinutes;

const updatedRecord = await Study.findOneAndUpdate(
        { email },
        {
            $set: { JoinedAt: null }, 
            $inc: { 
                Daily: timeSpentInMinutes, 
                AllTime: timeSpentInMinutes 
            },
        },
        { new: true }
    );

    console.log(`User disconnected. Updated record:`, updatedRecord);
}

export async function userLeavesRoom(email) {
    const currentTime = new Date().getTime();


    const userRecord = await Study.findOne({ email });

    if (!userRecord || !userRecord.JoinedAt) {
        console.log(`No active session for user with email: ${email}`);
        return;
    }

    const { JoinedAt, Points = 0 } = userRecord;

    const timeSpent = Math.max(currentTime - Number(JoinedAt), 0); 
    const timeSpentInMinutes = Math.floor(timeSpent / 1000 / 60);

    const earnedPoints =Points + Math.floor(timeSpentInMinutes / 5);

    const updatedRecord = await Study.findOneAndUpdate(
        { email },
        {
            $set: { JoinedAt: null }, 
            $inc: { Points: earnedPoints },
        },
        { new: true }
    );

    console.log(
        `User ${email} left the room. Time spent: ${timeSpentInMinutes} minutes. Earned points: ${earnedPoints}.`
    );

    return updatedRecord;
}
