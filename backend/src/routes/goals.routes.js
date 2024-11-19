import express from "express";
import Todo from "../models/goals.model.js";

const router = express.Router();


router.post("/api/goals", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const userTodos = await Todo.findOne({ email });

    if (!userTodos) {
      return res.status(200).json({ goals: [] });
    }

    res.status(200).json({ goals: userTodos.goals });
  } catch (error) {
    console.error("Error fetching goals:", error);
    res.status(500).json({ error: "Failed to fetch goals" });
  }
});


router.post("/api/goals/update", async (req, res) => {
  const { email, goals } = req.body;

  if (!email || !Array.isArray(goals)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const updatedTodos = await Todo.findOneAndUpdate(
      { email },
      { $set: { goals } },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Goals updated successfully", goals: updatedTodos.goals });
  } catch (error) {
    console.error("Error saving goals:", error);
    res.status(500).json({ error: "Failed to save goals" });
  }
});

export default router;
