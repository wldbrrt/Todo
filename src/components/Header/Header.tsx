import { Box, Button, Typography } from "@mui/material";
import {
  ADD_BUTTON,
  MAIN_TITLE,
  POPUP_BUTTON_TITLE,
  POPUP_TITLE_CREATE,
} from "./constants";
import { addButton, header, title, titleWrapper } from "./style";
import { FilterButtonsGroup } from "./FilterButtonsGroup/FilterButtonsGroup";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { EditorPopup } from "../EditorPopup/EditorPopup";
import { useAppDispatch, useScreenSize, useTodos } from "../../store/hooks";
import { addTodo, setSearchName } from "../../store/slices/todos";
import { storeTodosInLocalStorage } from "../../utils/storeInLocalstorage";
import { SearchBar, TSearchBarChangeHandler, TSearchBarOption } from "./SearchBar/SearchBar";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<TSearchBarOption | null>(null)
  const screenSize = useScreenSize();

  const { id, todos, count } = useTodos();

  const tagsList = new Set(todos.map((el) => el.tags).flat(1));
  const tagsArray = Array.from(tagsList);

  const dispatch = useAppDispatch();

  const addNote = () => {
    dispatch(
      addTodo({
        id: id,
        title: titleValue,
        content: descriptionValue,
        tags: tags,
        isCompleted: false,
        date: new Date().valueOf(),
      })
    );
    setDescriptionValue("");
    setTitleValue("");
    setTags([]);
  };

  useEffect(() => {
    if (!count && id > 1) storeTodosInLocalStorage({ id, count, todos });
    if (!count) return;
    storeTodosInLocalStorage({ id, count, todos });
  }, [id, count, todos]);

  const toggleModal = () => {
    setIsModalOpen((value) => !value);
  };

  const searchOptions = todos.map((item, ind) => ({label: item.title, id: item.id,}))

  const searchOnChangeHandler: TSearchBarChangeHandler = (event, item ) => {
    item ? dispatch(setSearchName(item.label)) : dispatch(setSearchName(null))
    setSearchValue(item)
  }

  return (
    <>
    <Box sx={header(screenSize)}>
      <Box sx={titleWrapper}>
        <Typography sx={title}>{MAIN_TITLE}</Typography>
        <Button sx={addButton} onClick={toggleModal}>
          {ADD_BUTTON}
        </Button>
      </Box>
      <SearchBar data={searchOptions} onChangeHandler={searchOnChangeHandler} value={searchValue}/>
      <FilterButtonsGroup tags={tagsArray} isFilter={true} />
    </Box>
    {isModalOpen &&
        createPortal(
          <EditorPopup
            title={POPUP_TITLE_CREATE}
            closeHandler={setIsModalOpen}
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            descriptionValue={descriptionValue}
            setDescriptionValue={setDescriptionValue}
            onClickHandler={addNote}
            tags={tags}
            setTags={setTags}
            buttonTitle={POPUP_BUTTON_TITLE}
          />,
          document.body
        )}
    </>
  );
};
