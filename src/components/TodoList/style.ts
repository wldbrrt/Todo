import { mainColors } from "../../ui/palette";

export const todoList = (screen: string) => {
  const style = {
    width: "80%",
    height: "75vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "scroll",

    "::-webkit-scrollbar": {
      width: "30px",
    },

    "::-webkit-scrollbar-track": {
      background: mainColors.backgroundBlue,
    },

    "::-webkit-scrollbar-thumb": {
      background: mainColors.green,
      borderRadius: "20px",
      border: `solid ${mainColors.backgroundBlue} 10px`,
    },

    "::-webkit-scrollbar-thumb:hover": {
      background: mainColors.green,
    },
  };

  switch (screen) {
    case "tablet": {
      style.width = "90%";
      break;
    }
    case "mobile": {
      style.width = "100%";
      style["::-webkit-scrollbar"].width = "10px";

      style[
        "::-webkit-scrollbar-thumb"
      ].border = `solid ${mainColors.backgroundBlue} 2px`;
      break;
    }
  }

  return style;
};

export const noResulttitle = {
  textAlign: "center",
  color: mainColors.white,
  fontSize: "4rem",
};

export const todoDateStyles = {
  color: mainColors.white,
  fontSize: "3rem",
  padding: "15px 0",
};
