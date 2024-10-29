import * as React from "react";
import { useAuth } from "../hooks/use-auth";
import Button from "@mui/material/Button";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { userName, isLoggedIn, setUserName, login } = useAuth();
  const navigate = useNavigate();

  // ログイン中だった場合は、/todoに遷移させる
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoggedIn]);

  return (
    <Box
      component="main"
      sx={{
        my: 0,
        mx: "auto",
        width: "720px",
        textAlign: "center",
      }}
    >
      <Container sx={{ py: 3, px: 5 }}>
        <Typography variant="h1">ログイン</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mt: 4,
          }}
        >
          <TextField
            id="userName"
            type="text"
            label="ユーザー名"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          >
            ログイン
          </TextField>
          <Button variant="contained" onClick={login} sx={{ py: 0, px: 1 }}>
            ログイン
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
