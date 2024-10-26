import { mainColors } from "../../../ui/palette";

export const todoItem = {
  background: mainColors.darkBlue,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 10px",
};

export const todoItemWrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

export const todoCheckbox = {
  width: "50px",
  height: "50px",
};

export const todoTitle = (isCompleted = false) => {
  const styles = {
    color: mainColors.green,
    minWidth: "10%",
    textDecoration: "none",
    fontSize: "2rem",
  };

  if (isCompleted) {
    styles.textDecoration = "line-through";
    styles.color = mainColors.darkGrey;
  }

  return styles;
};

export const todoContent = (isCompleted = false) => {
  const styles = {
    color: mainColors.white,
    padding: "10px 40px",
    height: "fit-content",
    overflow: "hidden",
    transition: "300ms",
    width: "100%",
    textDecoration: "none",
    fontSize: "1.6rem",
  };

  if (isCompleted) {
    styles.textDecoration = "line-through";
    styles.color = mainColors.darkGrey;
  }

  return styles;
};

export const todoWrapper = {
  position: "relative",
};

export const todoEdit = {
  width: "40px",
  height: "40px",
};

export const todoDelete = {
  width: "40px",
  height: "40px",
};

export const todoToggle = {
  transition: "300ms",
  width: "40px",
  height: "40px",
};

export const todoToggleActive = {
  transform: "rotate(180deg)",
  transition: "300ms",
  width: "40px",
  height: "40px",
};

export const tooltipMessage = (isTooltipVisible = false) => {
  const style = {
    color: mainColors.white,
    position: "absolute",
    right: 0,
    padding: "10px 10px",
    opacity: 0,
    transition: "300ms",
    minWidth: "150px",
    background: mainColors.backgroundBlue,
    border: `solid 2px ${mainColors.green}`,
    borderRadius: "10px",
    fontSize: "1.6rem",
  };

  if (isTooltipVisible) {
    style.opacity = 1;
  }

  return style;
};

export const tagsWrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};

export const todoDate = {
  color: mainColors.green,
  height: "fit-content",
};
