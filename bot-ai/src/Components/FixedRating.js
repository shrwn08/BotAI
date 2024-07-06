import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function FixedRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="disabled" value={value} readOnly />
    </Box>
  );
}

export default FixedRating;
