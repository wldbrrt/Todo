import { mainColors } from "../../ui/palette";

export const editorBackground = {
  position: "absolute",
  top: 0,
  zIndex: 4,
  width: "100%",
  height: "100%",
  background: "black",
  opacity: 0.7,
};

export const editorWrapper = (screen: string) => {
  const style = {
    width: "50vw",
    minHeight: "80vh",
    background: mainColors.backgroundBlue,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
    zIndex: 5,
    border: `${mainColors.green} solid 3px`,
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    padding: "30px 0",
  };

  switch (screen) {
    case "tablet": {
      style.width = "60vw";
      break;
    }
    case "mobile": {
      style.width = "90vw";
      style.minHeight = "90vh";
      break;
    }
  }

  return style;
};

export const editorTitle = {
  color: mainColors.white,
  fontSize: "3.5rem",
  textAlign: "center",
  textTransform: "uppercase",
};

export const titleWrapapper = {
  display: "flex",
  width: "80%",
  justifyContent: "space-between",
};

export const todoTitle = {
  width: "80%",
  border: "none",
  "& .MuiOutlinedInput-input": {
    color: mainColors.white,

    borderBottom: `${mainColors.green} solid 2px`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:before": {
    content: "'Title'",
    color: mainColors.grey,
  },
};

export const todoDescription = {
  // opacity: 0,
  position: "relative",
  width: "80%",
  border: "none",
  zIndex: 5,
  "& .MuiOutlinedInput-input": {
    opacity: 0,
    color: mainColors.white,
    mixBlendMode: "multiply",

    borderBottom: `${mainColors.green} solid 2px`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:before": {
    content: "'Description'",
    color: mainColors.grey,
  },
};

export const descriptionText = {
  width: "80%",
  color: mainColors.white,
  padding: "16px 14px",
  paddingBottom: "42px",
  position: "relative",
  zIndex: 4,
  borderBottom: `${mainColors.green} solid 2px`,
  marginTop: "-100px",
  height: "23px",
};

export const editorAddButton = {
  borderRadius: "20px",
  minWidth: "85px",
  fontSize: "4rem",
  padding: "5 5",
  position: "relative",
  marginTop: "auto",
  background: mainColors.green,
  color: mainColors.white,
  "&:hover": {
    background: mainColors.green,
  },
  "&:disabled": {
    background: mainColors.disabled,
  },
};

export const closeButton = {
  color: mainColors.green,
  fontSize: "4rem",
  "&:hover": {
    color: mainColors.white,
    background: "none",
  },
};
