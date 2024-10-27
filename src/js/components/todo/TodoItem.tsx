import * as React from "react";
import { createRoot } from "react-dom/client";
import "../../../css/main.css";
import { Todo } from "../../types/todo";
import { Button } from "../parts/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { useAuth } from "../../hooks/use-auth";
import { memo } from "react";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = memo(
  ({ id, task, person, deadline, deleteTodo }) => {
    const { login, logout, isLoggedIn, setIsLoggedIn, userName, setUserName } =
      useAuth();
    console.log("TOdoitemコンポーネントのレンダー");

    const style = userName === person ? "bg-red-200 font-bold" : "none";

    return (
      <>
        <li className={`grid grid-cols-4 gap-10 mb-1`}>
          <div>{task}</div>
          <div className={style}>{person}</div>
          <div>{deadline}</div>
          <div>
            <Button color="red" onClick={() => deleteTodo(id)}>
              削除
            </Button>
          </div>
        </li>
      </>
    );
  },
);

export default TodoItem;
