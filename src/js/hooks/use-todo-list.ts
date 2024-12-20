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

  const addTodo = (newTask: string, newPerson: string, newDeadline: string) => {
    const updatedTodoList = [
      ...todoList,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ];
    localStorage.setItem("todo-list", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

  const deleteTodo = (id: number) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todo-list", JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
  };

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
