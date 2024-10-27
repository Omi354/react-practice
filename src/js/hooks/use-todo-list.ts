import { useState, useEffect, useCallback, useMemo } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filterWord, setFilterWord] = useState<string>("");

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

  const deleteTodo = useCallback((id: number) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const filteredTodoList = useMemo(
    () =>
      todoList.filter(
        (todo) =>
          todo.task.includes(filterWord) || todo.person.includes(filterWord),
      ),
    [todoList, filterWord],
  );

  return {
    todoList: filteredTodoList,
    setTodoList,
    addTodo,
    deleteTodo,
    filterWord,
    setFilterWord,
  };
};
