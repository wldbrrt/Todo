import { Autocomplete, TextField } from "@mui/material";
import { popup, searchBar, searchOptions } from "./style";
import { SEARCH_PLACEHOLDER } from "../constants";

type SearchBarProps = {
  data: TSearchBarOption[]
  onChangeHandler: TSearchBarChangeHandler
  value: TSearchBarOption | null
}

export type TSearchBarOption = {
  label: string;
  id: number;
}

export type TSearchBarChangeHandler = (event: React.SyntheticEvent, selectedItem: TSearchBarOption | null,) => void

export const SearchBar = ({data, onChangeHandler, value}: SearchBarProps) => {
  return (
    <Autocomplete
      options={data}
      sx={searchBar}
      value={value}
      ListboxProps={{ style: popup }}
      renderInput={(params) => (
        <TextField {...params} label={SEARCH_PLACEHOLDER} sx={searchOptions} />
      )}
      onChange={onChangeHandler}
    />
  );
};
