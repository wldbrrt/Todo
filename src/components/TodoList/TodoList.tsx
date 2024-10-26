import { Box, Typography } from "@mui/material";
import { todoList, noResulttitle, todoDateStyles } from "./style";
import { Todoitem } from "./TodoItem/Todoitem";
import { useScreenSize, useTodos } from "../../store/hooks";
import { useSearchParams } from "react-router-dom";
import { TODOLIST_NO_CONTENT } from "./TodoItem/constants";
import { getFormatDate } from "../../utils/getFormatDate";
import { TTodo } from "../../types/todos";
import React, { useEffect, useState } from "react";

interface IDateObj {
  [key: string]: TTodo[];
}

export const TodoList = () => {
  const [searchParams] = useSearchParams();
  const { todos, searchName } = useTodos();
  const [searchResultTodos, setSearchResultTodos] = useState(todos)
  const screenSize = useScreenSize();
  const filterParam = searchParams.get("filter");

  useEffect(() => {
    if(searchName) {
      const result = todos.filter((todo) => todo.title === searchName)
      setSearchResultTodos(result)
    } else {
      setSearchResultTodos(todos)
    }
  }, [searchName, todos])

  const filteredTodos = filterParam
    ? searchResultTodos.filter((todo) => {
        const filterTags = filterParam.split(",");
        return filterTags.every((tag) => todo.tags.includes(tag));
      })
    : [...searchResultTodos];

  const data = filteredTodos;

  const dataObject: IDateObj = {};
  data.forEach((e) => {
    const dateKey = getFormatDate(new Date(e.date).toISOString());
    if (dataObject[dateKey]) {
      dataObject[dateKey].push(e);
    } else {
      dataObject[dateKey] = [e];
    }
  });

  const filtredByDaysData = Object.values(dataObject);

  return (
    <Box sx={todoList(screenSize)}>
      {!data.length && (
        <Typography sx={noResulttitle}>{TODOLIST_NO_CONTENT}</Typography>
      )}
      {filtredByDaysData.reverse().map((e) => {
        const currentDate = getFormatDate(new Date().toISOString());
        const todoDate = getFormatDate(new Date(e[0].date).toISOString());
        const dateString = `${new Date(e[0].date).getDate()}/${
          new Date(e[0].date).getMonth() + 1
        }/${new Date(e[0].date).getFullYear()}`;

        return (
          <React.Fragment key={todoDate}>
            <Typography sx={todoDateStyles}>
              {currentDate === todoDate ? "Today" : dateString}
            </Typography>
            {e.reverse().map((todo) => (
              <Todoitem
                key={todo.date.toString()}
                title={todo.title}
                content={todo.content}
                isCompleted={todo.isCompleted}
                id={todo.id}
                tags={todo.tags}
                date={new Date(todo.date)}
              />
            ))}
          </ React.Fragment>
        );
      })}
    </Box>
  );
};
