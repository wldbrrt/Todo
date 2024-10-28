import { TFinishedFilter, TTodo } from "../types/todos";

export const getSortedByCompleteArray = (todos: TTodo[], finishedFilter: TFinishedFilter) => {
    if(finishedFilter === 'SHOW_ALL'){
        return todos
    }
    if(finishedFilter === 'SHOW_FINISHED') {
        return todos.filter((el) => el.isCompleted === true)
    } else {
        return todos.filter((el) => el.isCompleted === false)
    }

  };