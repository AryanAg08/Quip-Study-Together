import React, { useState } from 'react';
import { Button, Input, Checkbox, Stack, IconButton, Box } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editingText, setEditingText] = useState('');

    const addGoal = () => {
        if (newGoal.trim() !== '') {
            setGoals([...goals, { text: newGoal, completed: false }]);
            setNewGoal('');
        }
    };

    const editGoal = (index) => {
        setEditingIndex(index);
        setEditingText(goals[index].text);
    };

    const saveGoal = (index) => {
        const updatedGoals = [...goals];
        updatedGoals[index].text = editingText;
        setGoals(updatedGoals);
        setEditingIndex(-1);
        setEditingText('');
    };

    const deleteGoal = (index) => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    const toggleGoalCompletion = (index) => {
        const updatedGoals = [...goals];
        updatedGoals[index].completed = !updatedGoals[index].completed;
        setGoals(updatedGoals);
    };

    return (
        <Box p={4}>
            <Stack spacing={3}>
                <Input
                    placeholder="Enter new goal"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                />
                <Button onClick={addGoal} colorScheme="teal">Add Goal</Button>
                {goals.map((goal, index) => (
                    <Box key={index} display="flex" alignItems="center" justifyContent="space-between">
                        {editingIndex === index ? (
                            <>
                                <Input
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <Button onClick={() => saveGoal(index)} colorScheme="blue">Save</Button>
                            </>
                        ) : (
                            <>
                                <Checkbox
                                    isChecked={goal.completed}
                                    onChange={() => toggleGoalCompletion(index)}
                                >
                                    {goal.text}
                                </Checkbox>
                                <Box>
                                    <IconButton
                                        icon={<FaEdit />}
                                        onClick={() => editGoal(index)}
                                        mr={2}
                                    />
                                    <IconButton
                                        icon={<FaTrash />}
                                        onClick={() => deleteGoal(index)}
                                    />
                                </Box>
                            </>
                        )}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default Goals;
