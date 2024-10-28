import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { select } from "./style";
import { TDateFilter, TFinishedFilter } from "../../../types/todos";

type FilterItemProps = {
  data: TFilterItemOption[];
  onChangeHandler: TFilterItemChangeHandler;
  value: string | undefined;
};

export type TFilterItemOption = {
  label: string;
  value: TDateFilter | TFinishedFilter;
};

export type TFilterItemChangeHandler = (
  event: SelectChangeEvent,
  child: React.ReactNode
) => void;

export const FilterItem = ({
  data,
  onChangeHandler,
  value,
}: FilterItemProps) => {
  return (
    <Select value={value} onChange={onChangeHandler} sx={select}>
      {data.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};
