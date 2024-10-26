import { useState, useEffect } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const todoListData = localStorage.getItem("todo-list");
    if (todoListData) {
      setTodoList(JSON.parse(todoListData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTask: string, newPerson: string, newDeadline: string) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return { todoList, setTodoList, addTodo, deleteTodo };
};
