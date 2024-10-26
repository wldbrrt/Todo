import { TTodosPayload } from "../types/todos";

export const storeTodosInLocalStorage = (todos: TTodosPayload): void => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", serializedTodos);
  } catch (error) {
    console.error("Error storing todos in local storage:", error);
  }
};
