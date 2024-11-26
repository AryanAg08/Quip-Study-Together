import React, { useState } from "react";
import styled from "styled-components";
import { FiCheckCircle, FiPlusCircle, FiCircle, FiTrash2, FiEdit } from "react-icons/fi";

const TodoPage = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Add a new goal
  const addGoal = () => {
    if (newGoal.trim() === "") return;
    setGoals([...goals, { text: newGoal, completed: false }]);
    setNewGoal("");
  };

  // Toggle completion status of a goal
  const toggleCompletion = (index) => {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
  };

  // Delete a goal
  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  // Start editing a goal
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(goals[index].text);
  };

  // Save the edited goal
  const saveEdit = () => {
    const updatedGoals = goals.map((goal, i) =>
      i === editingIndex ? { ...goal, text: editingText } : goal
    );
    setGoals(updatedGoals);
    setEditingIndex(null);
    setEditingText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingText("");
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
            {goals.map((goal, index) => (
              <Goal key={index} completed={goal.completed}>
                {editingIndex === index ? (
                  <EditContainer>
                    <EditInput
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <SaveButton onClick={saveEdit}>Save</SaveButton>
                    <CancelButton onClick={cancelEdit}>Cancel</CancelButton>
                  </EditContainer>
                ) : (
                  <>
                    <GoalText onClick={() => toggleCompletion(index)}>
                      {goal.completed ? <FiCheckCircle /> : <FiCircle />}
                      {goal.text}
                    </GoalText>
                    <ActionButtons>
                      <EditButton onClick={() => startEditing(index)}>
                        <FiEdit />
                      </EditButton>
                      <DeleteButton onClick={() => deleteGoal(index)}>
                        <FiTrash2 />
                      </DeleteButton>
                    </ActionButtons>
                  </>
                )}
              </Goal>
            ))}
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

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  background: transparent;
  border: none;
  color: #3498db;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: #2980b9;
  }
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

const EditContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
`;

const SaveButton = styled.button`
  background: #27ae60;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #1e8449;
  }
`;

const CancelButton = styled.button`
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;

export default TodoPage;
