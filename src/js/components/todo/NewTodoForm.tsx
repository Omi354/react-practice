import * as React from "react";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void;
};

export const NewTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");
  console.log("NewTodoFormコンポーネントのレンダー");

  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);
    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
      <TextField
        id="new-task"
        label="タスク名"
        variant="outlined"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <TextField
        id="new-person"
        label="担当者"
        variant="outlined"
        type="text"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
      />
      <TextField
        id="new-deadline"
        label="締切"
        variant="outlined"
        type="date"
        value={newDeadline}
        onChange={(e) => setNewDeadline(e.target.value)}
      />

      <Button variant="contained" onClick={addNewTodo}>
        追加
      </Button>
    </Box>
  );
};
