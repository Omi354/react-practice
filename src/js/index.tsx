import * as React from "react";
import { createRoot } from "react-dom/client";
import TodoItem from "../js/components/TodoItem";
import TodoList from "../js/components/TodoList";

const root = createRoot(document.getElementById("app")!);
root.render(<TodoList />);
