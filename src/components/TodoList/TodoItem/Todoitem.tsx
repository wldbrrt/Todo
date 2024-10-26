import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import {
  todoCheckbox,
  todoDelete,
  todoEdit,
  todoItem,
  todoTitle,
  todoWrapper,
  todoContent,
  todoItemWrapper,
  tooltipMessage,
  tagsWrapper,
  todoDate,
} from "./style";
import { Checkboxicon } from "../../icons/checkbox";
import { CheckboxActiveicon } from "../../icons/checkboxActive";
import { EditIconButton } from "../../icons/EditIconButton";
import { DeleteIconButton } from "../../icons/DeleteIconButton";

import { useState } from "react";
import { createPortal } from "react-dom";
import { FilterButtonsGroup } from "../../Header/FilterButtonsGroup/FilterButtonsGroup";
import { EditorPopup } from "../../EditorPopup/EditorPopup";
import { useAppDispatch } from "../../../store/hooks";
import {
  removeTodo,
  setTodoContent,
  setTodoStatus,
} from "../../../store/slices/todos";
import {
  EDIT_POPUP_BUTTON_TITLE,
  EDIT_POPUP_TITLE,
  TOOLTIP_MESSAGE,
} from "./constants";
import React from "react";

type TTodoitem = {
  title: string;
  content: string;
  isCompleted: boolean;
  id: number;
  tags: string[];
  date: Date;
};

export const Todoitem = ({
  title,
  content,
  isCompleted,
  id,
  tags,
  date,
}: TTodoitem) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(content);
  const [tagsArr, setTagsArr] = useState<string[]>(tags);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>();

  const toggleModal = () => {
    setIsModalOpen((value) => !value);
  };

  const dispatch = useAppDispatch();

  const editNote = () => {
    dispatch(
      setTodoContent({
        id: id,
        title: titleValue,
        content: descriptionValue,
        tags: tagsArr,
      })
    );
  };

  const deleteNote = () => {
    if (isCompleted) {
      dispatch(removeTodo(id));
      return;
    } else {
      setIsTooltipVisible(true);
      setTimeout(() => setIsTooltipVisible(false), 3000);
    }
  };

  const toggleCompleted = (value: boolean) => {
    dispatch(
      setTodoStatus({
        id: id,
        completed: value,
      })
    );
  };

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
          {el}
        </React.Fragment>
      );
    });
  };

  return (
    <Box sx={todoItem}>
      <Box sx={todoItemWrapper}>
        <Checkbox
          sx={todoCheckbox}
          checked={isCompleted}
          icon={<Checkboxicon />}
          checkedIcon={<CheckboxActiveicon />}
          onClick={() => {
            toggleCompleted(!isCompleted);
          }}
        />
        <Typography sx={todoTitle(isCompleted)}>{title}</Typography>
        <Box sx={todoWrapper}>
          <IconButton sx={todoEdit} onClick={toggleModal}>
            <EditIconButton />
          </IconButton>
          <IconButton sx={todoDelete} onClick={deleteNote}>
            <DeleteIconButton />
          </IconButton>
          <Box sx={tooltipMessage(isTooltipVisible)}>{TOOLTIP_MESSAGE}</Box>
        </Box>
      </Box>
      <Typography sx={todoContent(isCompleted)}>
        {hightlightText(content).map((el) => el)}
      </Typography>
      <Box sx={tagsWrapper}>
        <FilterButtonsGroup tags={tags} />
        {date && (
          <Typography sx={todoDate}>{`${new Date(date).getDate()}.${
            new Date(date).getMonth() + 1
          }.${new Date(date).getFullYear()}`}</Typography>
        )}
      </Box>

      {isModalOpen &&
        createPortal(
          <EditorPopup
            title={EDIT_POPUP_TITLE}
            closeHandler={setIsModalOpen}
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            descriptionValue={descriptionValue}
            setDescriptionValue={setDescriptionValue}
            onClickHandler={editNote}
            tags={tagsArr}
            setTags={setTagsArr}
            buttonTitle={EDIT_POPUP_BUTTON_TITLE}
          />,
          document.body
        )}
    </Box>
  );
};
