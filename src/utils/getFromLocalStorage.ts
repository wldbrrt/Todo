import { TTodos } from "../types/todos";

export const getTodosFromLocalStorage = (): TTodos | null => {
  try {
    const serializedTodos = localStorage.getItem("todos");
    if (serializedTodos === null) {
      return null;
    }
    const parsedTodos = JSON.parse(serializedTodos) as TTodos;
    return parsedTodos;
  } catch (error) {
    console.error("Error getting todos from local storage:", error);
    return null;
  }
};
