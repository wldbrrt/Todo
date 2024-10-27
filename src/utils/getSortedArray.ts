import { TTodo } from "../types/todos";

export const getSortedArray = (todos: TTodo[], dateFilter: 'NEW_FIRST' | 'OLD_FIRST') => {
    return todos.sort((a, b) => {
      if (dateFilter === 'NEW_FIRST') {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });
  };