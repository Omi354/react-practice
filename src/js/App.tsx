import * as React from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./components/todo/TodoList";
import { Heading } from "./components/parts/Headding";
import { useState } from "react";
import { NewTodoForm } from "./components/todo/NewTodoForm";

export type Todo = {
  id: number;
  task: string;
  person: string;
  deadline: string;
};

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h2">TODO</Heading>
      <NewTodoForm setTodoList={setTodoList} />

      <TodoList todoList={todoList} />
    </main>
  );
};
