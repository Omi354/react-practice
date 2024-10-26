import * as React from "react";
import { Button } from "../components/parts/Button";
import { Heading } from "../components/parts/Headding";
import { TextFlild } from "../components/parts/TextFeild";
import { useAuth } from "../hooks/use-auth";

export const Login = () => {
  const { userName, setUserName, login } = useAuth();
  console.log("Loginコンポーネントのレンダー");
  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">ログイン</Heading>
      <div className="flex gap-1">
        <TextFlild
          id="userName"
          type="text"
          label="ユーザー名"
          value={userName}
          onChange={setUserName}
        />
        <Button color="blue" onClick={login}>
          ログイン
        </Button>
      </div>
    </main>
  );
};
