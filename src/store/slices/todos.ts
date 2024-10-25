import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo, TTodos } from "../../types/todos";

const initialState: TTodos = {
  count: 0,
  id: 1,
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TTodo>) {
      state.todos.push(action.payload);
      state.count += 1;
      state.id += 1;
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].isCompleted = action.payload.completed;
    },
    setTodoContent(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        content: string;
        tags: string[];
      }>
    ) {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].title = action.payload.title;
      state.todos[index].content = action.payload.content;
      state.todos[index].tags = action.payload.tags;
    },
    updateTodos(
      state,
      action: PayloadAction<{
        count: number;
        id: number;
        todos: TTodo[];
      }>
    ) {
      state.id = action.payload.id;
      state.count = action.payload.count;
      state.todos = action.payload.todos;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  setTodoStatus,
  setTodoContent,
  updateTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
