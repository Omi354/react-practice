import * as React from "react";
import { createRoot } from "react-dom/client";
import TodoItem from "./TodoItem";
import { Todo } from "../../App";

type Props = {
  todoList: Todo[];
};

const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <ul className="mt-1 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-3 gap-10 mb-1 font-bold">
        <div>タスク名</div>
        <div>担当名</div>
        <div>期限</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
        />
      ))}
    </ul>
  );
};

export default TodoList;
