import * as React from "react";
import { createRoot } from "react-dom/client";

type TodoItemProps = {
  task: string;
  deadline: string;
};

const TodoItem = ({ task, deadline }: TodoItemProps) => {
  return (
    <li>
      {task} 締切：{deadline}
    </li>
  );
};

export default TodoItem;
