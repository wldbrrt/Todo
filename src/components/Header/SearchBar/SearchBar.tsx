import { Autocomplete, TextField } from "@mui/material";
import { popup, searchBar, searchOptions } from "./style";
import { SEARCH_PLACEHOLDER } from "../constants";

export const SearchBar = () => {
  const options = [
    { label: "shopping", id: 1 },
    { label: "gym", id: 3 },
    { label: "фыв", id: 4 },
    { label: "1234", id: 5 },
    { label: "онон", id: 6 },
    { label: "googgaa", id: 7 },
  ];

  return (
    <Autocomplete
      options={options}
      sx={searchBar}
      ListboxProps={{ style: popup }}
      renderInput={(params) => (
        <TextField {...params} label={SEARCH_PLACEHOLDER} sx={searchOptions} />
      )}
    />
  );
};
