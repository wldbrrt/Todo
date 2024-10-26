import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mainColors } from "../../../ui/palette";
import {
  inputField,
  text,
  inputWrapper,
  componentWrapper,
  inputTitle,
  saveButton,
  validationMessage,
} from "./style";
import { getFiltredTags } from "../../../utils/getFiltredTags";
import { SaveIcon } from "../../icons/saveIcon";
import { EditIconButton } from "../../icons/EditIconButton";
import { VALIDATION_MESSAGES } from "../constants";
import { useScreenSize } from "../../../store/hooks";

type EditableInputProps = {
  title: string;
  value: string;
  setDescriptionValue: (value: string) => void;
  setTags: (value: string[]) => void;
  isExtenderEditor?: boolean;
  isFieldEmpty: boolean;
  setIsFieldEmpty: (value: boolean) => void;
};

export const EditableInput = ({
  title,
  value,
  setDescriptionValue,
  setTags,
  isExtenderEditor,
  isFieldEmpty,
  setIsFieldEmpty,
}: EditableInputProps) => {
  const [isInputActrive, setIsInputActive] = useState<boolean>(false);
  const [isFiledTouched, setIsFieldTouched] = useState<boolean>(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    value ? setIsFieldEmpty(false) : setIsFieldEmpty(true);
  }, [value, isFiledTouched]);

  const hightlightText = (text: string) => {
    const separatedlinebreaks = text
      .split("")
      .map((el) => {
        if (el === "\n") return ` ${el} `;
        return el;
      })
      .join("");

    const wordsArray = separatedlinebreaks.split(" ");
    return wordsArray.map((el, index) => {
      return (
        <React.Fragment key={index}>
          {index > 0 && " "}
          {el === "\n" && <br />}
          {el[0] === "#" ? (
            <span style={{ color: mainColors.green, fontSize: "1.6rem" }}>
              {el}
            </span>
          ) : (
            el
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Box sx={componentWrapper}>
      <Typography sx={inputTitle}>{title}</Typography>
      {isInputActrive ? (
        <Box sx={inputWrapper}>
          <TextField
            autoFocus
            sx={inputField(screenSize, isExtenderEditor)}
            value={value}
            multiline={isExtenderEditor}
            onBlur={(e) => {
               setIsInputActive(false)
            }}
            onChange={(e) => {
              setDescriptionValue(e.target.value);
              if (isExtenderEditor) setTags(getFiltredTags(e.target.value));
            }}
            onFocus={(e) => {
              e.target.setSelectionRange(value.length, value.length);
              setIsFieldTouched(true);
            }}
          />
        </Box>
      ) : (
        <Box sx={inputWrapper}>
          <Typography
            onClick={(e) => {
              setIsInputActive(true)
            }}
            sx={text}
          >
            {isExtenderEditor ? hightlightText(value).map((el) => el) : value}
          </Typography>
        </Box>
      )}
      {isInputActrive ? (
        <IconButton sx={saveButton} onClick={(e) => setIsInputActive(false)}>
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton sx={saveButton} onClick={(e) => setIsInputActive(true)}>
          <EditIconButton />
        </IconButton>
      )}
      {isFieldEmpty && isFiledTouched && (
        <Typography sx={validationMessage}>
          {VALIDATION_MESSAGES.IS_EMPTY}
        </Typography>
      )}
    </Box>
  );
};
