import * as React from "react";
import { createRoot } from "react-dom/client";
import "../../../css/main.css";

type TodoItemProps = {
  task: string;
  person: string;
  deadline: string;
};

const TodoItem: React.FC<TodoItemProps> = ({ task, person, deadline }) => {
  return (
    <li className="grid grid-cols-3 gap-10 mb-1">
      <div>{task}</div>
      <div>{person}</div>
      <div>締切：{deadline}</div>
    </li>
  );
};

export default TodoItem;
