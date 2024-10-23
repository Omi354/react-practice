import * as React from "react";
import { createRoot } from "react-dom/client";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = [
    { id: 1, task: "掃除", deadline: "明日まで" },
    { id: 2, task: "洗濯", deadline: "明日まで" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} deadline={todo.deadline} />
      ))}
    </ul>
  );
};

export default TodoList;
