import * as React from "react";
import { TextFlild } from "../parts/TextFeild";
import { useState } from "react";
import { Button } from "../parts/Button";

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
    <div className="flex gap-1">
      <TextFlild
        id="new-task"
        type="text"
        label="タスク名"
        value={newTask}
        onChange={setNewTask}
      />
      <TextFlild
        id="new-person"
        type="text"
        label="担当者"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextFlild
        id="new-deadline"
        type="date"
        label="締切"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <Button color="blue" onClick={addNewTodo}>
        追加
      </Button>
    </div>
  );
};
