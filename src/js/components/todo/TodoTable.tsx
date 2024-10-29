import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Todo } from "../../types/todo";
import TodoItem from "./TodoItem";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
};

export const TodoTable: React.FC<Props> = ({ todoList, deleteTodo }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="todo-table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#efefef" }}>
            <TableCell align="center">タスク名</TableCell>
            <TableCell align="center">担当名</TableCell>
            <TableCell align="center">期限</TableCell>
            <TableCell align="center">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TodoItem
                key={todo.id}
                id={todo.id}
                task={todo.task}
                person={todo.person}
                deadline={todo.deadline}
                deleteTodo={deleteTodo}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
