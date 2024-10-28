import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useMediaQuery } from "@mui/material";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTodos = () => {
  const { count, id, todos, searchName, dateFilter, finishedFilter } = useAppSelector((state) => state.todos);

  return {
    count,
    id,
    todos,
    searchName,
    dateFilter,
    finishedFilter
  };
};

export const useTodoByID = (id: number) => {
  const { todos } = useAppSelector((state) => state.todos);

  return todos.find((el) => el.id === id);
};

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export const useScreenSize = (): "desctop" | "tablet" | "mobile" => {
  const desctop = useMediaQuery("(min-width:1200px)");
  const tablets = useMediaQuery("(min-width:768px)");
  const mobile = useMediaQuery("(max-width:768px)");

  if (desctop) return "desctop";
  if (tablets) return "tablet";
  if (mobile) return "mobile";

  return "desctop";
};
