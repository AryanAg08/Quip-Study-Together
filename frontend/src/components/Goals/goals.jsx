import React, { useState, useEffect } from "react";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingText, setEditingText] = useState("");

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/goals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        });

        if (response.ok) {
          const data = await response.json();
          setGoals(data.goals || []);
        } else {
          console.error("Failed to fetch goals");
        }
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    if (userEmail) {
      fetchGoals();
    }
  }, [userEmail]);

  const addGoal = async () => {
    if (newGoal.trim() === "") return;

    const newGoals = [...goals, { text: newGoal, completed: false }];
    setGoals(newGoals);
    setNewGoal("");

    try {
      const response = await fetch("http://localhost:8000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, goals: newGoals }),
      });

      if (!response.ok) {
        console.error("Failed to save new goal");
      }
    } catch (error) {
      console.error("Error saving new goal:", error);
    }
  };

  const saveGoal = async (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].text = editingText;
    setGoals(updatedGoals);
    setEditingIndex(-1);
    setEditingText("");

    try {
      const response = await fetch("http://localhost:8000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, goals: updatedGoals }),
      });

      if (!response.ok) {
        console.error("Failed to update goal");
      }
    } catch (error) {
      console.error("Error updating goal:", error);
    }
  };

  const deleteGoal = async (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);

    try {
      const response = await fetch("http://localhost:8000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, goals: updatedGoals }),
      });

      if (!response.ok) {
        console.error("Failed to delete goal");
      }
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  const toggleGoalCompletion = async (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);

    try {
      const response = await fetch("http://localhost:8000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, goals: updatedGoals }),
      });

      if (!response.ok) {
        console.error("Failed to toggle goal completion");
      }
    } catch (error) {
      console.error("Error toggling goal completion:", error);
    }
  };

  const completedGoalsCount = goals.filter((goal) => goal.completed).length;
  const totalGoalsCount = goals.length;

  return (
    <div className="goals-container">
      <input
        type="text"
        placeholder="Enter new goal"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
      />
      <button onClick={addGoal}>Add Goal</button>
      <div>
        <p>
          Progress: {completedGoalsCount} / {totalGoalsCount} goals completed
        </p>
      </div>
      <div>
        {goals.map((goal, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoalCompletion(index)}
            />
            {editingIndex === index ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span>{goal.text}</span>
            )}
            {editingIndex === index ? (
              <button onClick={() => saveGoal(index)}>Save</button>
            ) : (
              <button onClick={() => setEditingIndex(index)}>Edit</button>
            )}
            <button onClick={() => deleteGoal(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;