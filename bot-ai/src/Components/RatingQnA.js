import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RatingQnA = ({ handleSubmitRating }) => {
  const [value, setValue] = useState(0);

  const handleRatingChange = (newValue) => {
    setValue(newValue);
    handleSubmitRating(newValue);
  };

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          handleRatingChange(newValue);
        }}
      />
    </Box>
  );
};

export default RatingQnA;
