import { mainColors } from "../../../ui/palette";

export const searchBar = {
  width: "80%",
  "& .MuiInputBase-root": {
    height: "50px",
  },
  "&.MuiAutocomplete-root .MuiOutlinedInput-notchedOutline": {
    //borderColor: mainColors.green,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: mainColors.green,
  },
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: mainColors.white,
  },

  "& .MuiAutocomplete-inputRoot": {
    color: mainColors.darkBlue,
    background: mainColors.grey,
    fontSize: '1.2rem'
  },
  "& .MuiFormLabel-root": {
    fontSize: '1.2rem'
  },
  "& .MuiAutocomplete-listbox": {
    height: "200px",
  },
};

export const searchOptions = {
  "& .MuiFormLabel-root": {
    color: mainColors.darkBlue,
  },
};

export const popup = {
  maxHeight: "150px",
  overflow: "hidden",
  color: mainColors.darkBlue,
  background: mainColors.grey,
};
