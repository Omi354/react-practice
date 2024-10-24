import * as React from "react";
import { TextFlild } from "../parts/TextFeild";
import { Todo } from "../../App";
import { useState } from "react";

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const NewTodoForm: React.FC<Props> = ({ setTodoList }) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");
  const addNewTodo = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);
    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <>
      <TextFlild
        type="text"
        label="タスク名"
        value={newTask}
        onChange={setNewTask}
      />
      <TextFlild
        type="text"
        label="担当者"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextFlild
        type="date"
        label="締切"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <button
        className="border ml-2 bg-cyan-300 px-2 rounded"
        onClick={addNewTodo}
      >
        追加
      </button>
    </>
  );
};
