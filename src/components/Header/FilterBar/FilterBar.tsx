import { Box} from "@mui/material"
import { FilterItem, TFilterItemChangeHandler } from "./FilterItem"
import { useState } from "react"
import { FILTER_DATE_NEW_FIRST, FILTER_DATE_OLD_FIRST, FILTER_FINISHED_FIRST, FILTER_UNFINISHED_FIRST } from "../constants"
import { useAppDispatch } from "../../../store/hooks"
import { setDateFilter, setFinishedFilter } from "../../../store/slices/todos"
import { TDateFilter, TFinishedFilter } from "../../../types/todos"

type TDateItemOptions = {
    label: string;
    value: TDateFilter;
  }[];

  type TFinishedtemOptions = {
    label: string;
    value: TFinishedFilter;
  }[];

export const FilterBar = () => {
    const [dateFilterValue, setDateFilterValue] = useState<TDateFilter>('NEW_FIRST')
    const [finishedTodoFilterValue, setFinishedTodoFilterValue] = useState<TFinishedFilter>('UNFINISHED_FIRST')
    const dispatch = useAppDispatch();

    const dateFilter: TDateItemOptions = [{label: FILTER_DATE_NEW_FIRST, value: 'NEW_FIRST'}, {label: FILTER_DATE_OLD_FIRST, value: 'OLD_FIRST'}]
    const finishedTodosFilter: TFinishedtemOptions = [{label: FILTER_UNFINISHED_FIRST, value: 'UNFINISHED_FIRST'}, {label: FILTER_FINISHED_FIRST, value: 'FINISHED_FIRST'}]

    const dateFilterOnchangehandler: TFilterItemChangeHandler = (event, child) => {
        const newValue = event.target.value as TDateFilter
        setDateFilterValue(newValue)
        dispatch(setDateFilter(newValue))
    }

    const finishedTodosFilterOnchangehandler: TFilterItemChangeHandler = (event, child) => {
        const newValue = event.target.value as TFinishedFilter
        setFinishedTodoFilterValue(newValue)
        dispatch(setFinishedFilter(newValue))
    }

    return (
        <Box>
            <FilterItem data={dateFilter} onChangeHandler={dateFilterOnchangehandler} value={dateFilterValue}/>
            <FilterItem data={finishedTodosFilter} onChangeHandler={finishedTodosFilterOnchangehandler} value={finishedTodoFilterValue}/>
        </Box>
    )
}