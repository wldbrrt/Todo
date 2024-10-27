import { TFinishedFilter, TTodo } from "../types/todos";

export const getSortedByCompleteArray = (todos: TTodo[], finishedFilter: TFinishedFilter) => {
    let unfinishedFirst = false
    if(finishedFilter === "UNFINISHED_FIRST") {
        unfinishedFirst = true
    } else {
        unfinishedFirst = false
    }
    return todos.sort((a, b) => {
      return unfinishedFirst
        ? Number(a.isCompleted) - Number(b.isCompleted)
        : Number(b.isCompleted) - Number(a.isCompleted)
    });
  };