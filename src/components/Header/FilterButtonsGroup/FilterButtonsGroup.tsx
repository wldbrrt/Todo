import { Button, Box } from "@mui/material";
import { button, buttonGroup } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FilterButtonsGroupProps = {
  tags: string[];
  isFilter?: boolean;
};

export const FilterButtonsGroup = ({
  tags,
  isFilter = false,
}: FilterButtonsGroupProps) => {
  const [filterArray, setFilterArray] = useState<string[]>([]);
  const navigate = useNavigate();

  const updateURL = (newFilterArray: string[]) => {
    const filterString = newFilterArray.join(",");
    navigate(`?filter=${encodeURIComponent(filterString)}`, { replace: true });
  };

  return isFilter ? (
    <Box sx={buttonGroup}>
      {tags.map((el, ind) => {
        const isActive = filterArray.includes(el);
        return (
          <Button
            key={ind}
            sx={button(isActive)}
            onClick={() => {
              if (isActive) {
                const newFilterArray = filterArray.filter((str) => str !== el);
                setFilterArray(newFilterArray);
                updateURL(newFilterArray);
              } else {
                const newFilterArray = [...filterArray, el];
                setFilterArray(newFilterArray);
                updateURL(newFilterArray);
              }
            }}
          >
            {el}
          </Button>
        );
      })}
      <Button
        onClick={() => {
          setFilterArray([]);
          updateURL([]);
        }}
      >
        Clear filters
      </Button>
    </Box>
  ) : (
    <Box sx={buttonGroup}>
      {tags.map((el, ind) => (
        <Button key={ind} sx={button(false, true)}>
          {el}
        </Button>
      ))}
    </Box>
  );
};
