import { TTodos } from "../types/todos";

export const storeTodosInLocalStorage = (todos: TTodos): void => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", serializedTodos);
  } catch (error) {
    console.error("Error storing todos in local storage:", error);
  }
};
