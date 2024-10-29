import * as React from "react";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { useTodoList } from "../hooks/use-todo-list";
import { useAuth } from "../hooks/use-auth";
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TodoTable } from "../components/todo/TodoTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =
    useTodoList();
  const { logout, isLoggedIn, userName } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Box component="main" sx={{ width: "720px", mx: "auto", mt: 5 }}>
      <Stack
        component="header"
        direction="row"
        spacing={3}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">TODO</Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={0}>
            <AccountCircleIcon />
            <Box>{isLoggedIn ? userName : "ログアウト中"}</Box>
          </Stack>
          <Box>
            <Button
              size="small"
              variant="contained"
              onClick={logout}
              sx={{
                backgroundColor: "#ef5350",
                color: "#FFFFFF",
              }}
            >
              ログアウト
            </Button>
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ mt: 8 }} component="section">
        <Typography variant="h2">新規TODO作成</Typography>
        <Box sx={{ mt: 4 }}>
          <NewTodoForm addTodo={addTodo} />
        </Box>
      </Box>
      <Box sx={{ mt: 8 }} component="section">
        <Typography variant="h2">TODO一覧</Typography>

        <Box
          sx={{
            mt: 4,
            display: "flex", // フレックスボックスを有効にする
            flexDirection: "row", // 子要素を横並びにする
            justifyContent: "flexStart", // 左寄せ
          }}
        >
          <TextField
            id={"filter-word"}
            label={"絞込み"}
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
            type={"text"}
            InputProps={{
              sx: { textAlign: "left" }, // テキストを左寄せ
            }}
          >
            絞込み
          </TextField>
        </Box>
        <Box sx={{ mt: 4 }}>
          <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
        </Box>
      </Box>
    </Box>
  );
};
