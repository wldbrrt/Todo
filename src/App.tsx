import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { useAppDispatch } from "./store/hooks";
import { getTodosFromLocalStorage } from "./utils/getFromLocalStorage";
import { updateTodos } from "./store/slices/todos";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = getTodosFromLocalStorage();
    if (data) {
      dispatch(
        updateTodos({
          count: data.count,
          id: data.id,
          todos: data.todos,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
