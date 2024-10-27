import * as React from "react";
import { Button } from "../components/parts/Button";
import { Heading } from "../components/parts/Headding";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import { useTodoList } from "../hooks/use-todo-list";
import { useAuth } from "../hooks/use-auth";
import { TextFlild } from "../components/parts/TextFeild";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =
    useTodoList();
  const { logout, isLoggedIn, userName } = useAuth();
  console.log("Todoコンポーネントのレンダー");

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{isLoggedIn ? userName : "ログアウト中"}</div>
      <div>
        <Button color="red" onClick={logout}>
          ログアウト
        </Button>
      </div>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TextFlild
            id={"filter-word"}
            label={"絞込み"}
            value={filterWord}
            onChange={setFilterWord}
            type={"text"}
          ></TextFlild>
        </div>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  );
};
