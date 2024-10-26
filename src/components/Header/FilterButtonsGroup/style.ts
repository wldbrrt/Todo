import { mainColors } from "../../../ui/palette";

export const buttonGroup = {
  display: "flex",
  gap: "5px",
  flexWrap: "wrap",
  width: "80%",
};

export const button = (isActive: boolean, isFilter = false) => {
  const styles = {
    background: "none",
    border: `${mainColors.green} solid 2px`,
    borderRadius: "15px",
    color: mainColors.white,
    fontSize: "1rem",
    padding: "0 10 0 10 ",
    minWidth: "10px",
    "&:active": {
      background: "none",
    },
    "&:hover": {
      background: mainColors.green,
    },
  };

  if (isActive) {
    styles.background = mainColors.green;
  }

  if (isFilter) {
    styles["&:hover"] = {
      background: "none",
    };
  }

  return styles;
};

export const activeButton = {
  background: mainColors.green,
  border: `${mainColors.green} solid 2px`,
  borderRadius: "15px",
  color: mainColors.white,
  fontSize: "1rem",
  padding: "0 0 0 0 ",
  "&:active": {
    background: mainColors.green,
  },
};
