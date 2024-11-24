import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiCheckCircle, FiPlusCircle, FiCircle, FiTrash2 } from "react-icons/fi";
import axios from "axios";

const TodoPage = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const userEmail = "user@example.com"; // Replace with dynamic email if available

  useEffect(() => {
    // Fetch existing goals
    axios
      .get(`/api/goals?email=${userEmail}`)
      .then((response) => setGoals(response.data.goals))
      .catch((error) => console.error("Error fetching goals:", error));
  }, [userEmail]);

  const addGoal = () => {
    if (newGoal.trim() === "") return;

    const updatedGoals = [...goals, { text: newGoal, completed: false }];
    updateGoals(updatedGoals);
    setNewGoal("");
  };

  const toggleCompletion = (index) => {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, completed: !goal.completed } : goal
    );
    updateGoals(updatedGoals);
  };

  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    updateGoals(updatedGoals);
  };

  const updateGoals = (updatedGoals) => {
    axios
      .post(`/api/goals/update`, { email: userEmail, goals: updatedGoals })
      .then(() => setGoals(updatedGoals))
      .catch((error) => console.error("Error updating goals:", error));
  };

  return (
    <MainTodoDiv>
      <Container>
        <Header>
          <Title>Todo List</Title>
          <SubTitle>Manage your daily goals</SubTitle>
        </Header>
        <Content>
          <AddGoal>
            <Input
              type="text"
              placeholder="Enter a new goal"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
            />
            <AddButton onClick={addGoal}>
              <FiPlusCircle /> Add Goal
            </AddButton>
          </AddGoal>
          <GoalList>
            {goals.length > 0 ? (
                goals.map((goal, index) => (
                <Goal key={index} completed={goal.completed}>
                    <GoalText onClick={() => toggleCompletion(index)}>
                    {goal.completed ? <FiCheckCircle /> : <FiCircle />}
                    {goal.text}
                    </GoalText>
                    <DeleteButton onClick={() => deleteGoal(index)}>
                    <FiTrash2 />
                    </DeleteButton>
                </Goal>
                ))
            ) : (
                <p>No goals added yet</p>
            )}
            </GoalList>

        </Content>
      </Container>
    </MainTodoDiv>
  );
};

// Styled Components
const MainTodoDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  color: #333;
  position: relative;
  z-index: 500;
  padding: 20px;
  max-width: 600px;
  margin: 80px auto;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #3f51b5;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddGoal = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #3f51b5;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background: #2c3e8b;
  }
`;

const GoalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Goal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.completed ? "#d4edda" : "#fff")};
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const GoalText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1em;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #e74c3c;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: #c0392b;
  }
`;

export default TodoPage;
