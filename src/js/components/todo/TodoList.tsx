import * as React from "react";
import { createRoot } from "react-dom/client";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todoList, deleteTodo }) => {
  console.log("Todolistコンポーネントのレンダー");

  return (
    <ul className="mt-1 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-4 gap-10 mb-1 font-bold">
        <div>タスク名</div>
        <div>担当名</div>
        <div>期限</div>
        <div>操作</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
