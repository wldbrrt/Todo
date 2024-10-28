import { mainColors } from "../../../ui/palette";

export const select = {
  width: "300px",
  "& .MuiInputBase-root": {
    height: "50px",
  },
  "& .MuiInputBase-input": {
    background: mainColors.grey
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
