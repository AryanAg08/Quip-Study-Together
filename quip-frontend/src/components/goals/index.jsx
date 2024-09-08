import React, { useState } from 'react';
import { Button, Input, Checkbox, Stack, IconButton, Box, Progress, Text } from '@chakra-ui/react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

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

    const completedGoalsCount = goals.filter(goal => goal.completed).length;
    const totalGoalsCount = goals.length;
    const completionPercentage = totalGoalsCount === 0 ? 0 : (completedGoalsCount / totalGoalsCount) * 100;

    return (
        <Box p={4}>
            <Stack spacing={3}>
                <Input
                    placeholder="Enter new goal"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                />
                <Button onClick={addGoal} colorScheme="teal">Add Goal</Button>
                <Box my={4}>
                    <Text mb={2}>Progress: {completedGoalsCount} / {totalGoalsCount} goals completed</Text>
                    <Progress value={completionPercentage} colorScheme="teal" />
                </Box>
                {goals.map((goal, index) => (
                    <Box
                        key={index}
                        display="flex"
                        flexDirection="column"
                        p={2}
                        border="1px solid #e2e8f0"
                        borderRadius="md"
                    >
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                isChecked={goal.completed}
                                onChange={() => toggleGoalCompletion(index)}
                                mr={2}
                            />
                            {editingIndex === index ? (
                                <Input
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                    flex={1}
                                    mr={2}
                                />
                            ) : (
                                <span style={{ 
                                    textDecoration: goal.completed ? 'line-through' : 'none', 
                                    textDecorationThickness: '2px', 
                                    wordBreak: 'break-word', 
                                    flex: 1 
                                }}>
                                    {goal.text}
                                </span>
                            )}
                        </Box>
                        <Box display="flex" justifyContent="flex-end" mt={2}>
                            {editingIndex === index ? (
                                <IconButton
                                    icon={<FaSave />}
                                    onClick={() => saveGoal(index)}
                                    mr={2}
                                    colorScheme="green"
                                />
                            ) : (
                                <IconButton
                                    icon={<FaEdit />}
                                    onClick={() => editGoal(index)}
                                    mr={2}
                                />
                            )}
                            <IconButton
                                icon={<FaTrash />}
                                onClick={() => deleteGoal(index)}
                                colorScheme="red"
                            />
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default Goals;
