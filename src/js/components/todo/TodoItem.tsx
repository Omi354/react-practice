import * as React from "react";
import { createRoot } from "react-dom/client";
import "../../../css/main.css";
import { Todo } from "../../types/todo";
import { AuthContext } from "../../contexts/AuthContext";
import { useAuth } from "../../hooks/use-auth";
import { memo } from "react";
import { Button, TableCell } from "@mui/material";

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

    const style = userName === person ? "bg-red-200 font-bold" : "none";

    return (
      <>
        <TableCell align="center">{task}</TableCell>
        <TableCell align="center" className={style}>
          {person}
        </TableCell>
        <TableCell align="center">{deadline}</TableCell>
        <TableCell align="center">
          <Button
            onClick={() => deleteTodo(id)}
            size="small"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#ef5350",
            }}
          >
            削除
          </Button>
        </TableCell>
      </>
    );
  },
);

export default TodoItem;
