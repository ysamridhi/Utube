import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";



const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory && "#fc1503",
            color: category.name === selectedCategory ? "#fff" : "#a1a1a1",
          }}
          key={category.name}
        >
          <span
            style={{
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
