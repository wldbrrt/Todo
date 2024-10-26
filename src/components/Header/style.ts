import { mainColors } from "../../ui/palette";

export const header = (screen: string) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    padding: "20px 0",
    width: "80%",
    margin: "0 auto",
  };

  switch (screen) {
    case "tablet": {
      style.width = "90%";
      break;
    }
    case "mobile": {
      style.width = "100%";
      break;
    }
  }

  return style;
};

export const titleWrapper = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

export const title = {
  color: "#fff",
  fontSize: "6.4rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textTransform: "uppercase",
};

export const addButton = {
  background: mainColors.green,
  fontSize: "3rem",
  borderRadius: "20px",
  color: mainColors.white,
  "&:hover": {
    background: mainColors.green,
    color: mainColors.darkBlue,
  },
};
