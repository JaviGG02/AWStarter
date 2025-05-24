import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <MKBox mt={4} mb={4} sx={{ maxWidth: "1000px", mx: "auto" }}>
      <TextField
        fullWidth
        placeholder="Search blog posts by title, content, or tags..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>search</Icon>
            </InputAdornment>
          ),
          sx: {
            fontSize: "1.2rem",
            padding: "12px 14px",
            "& input": {
              padding: "8px 0",
            }
          }
        }}
      />
    </MKBox>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;