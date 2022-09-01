import React, { useState } from 'react';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Typography,
} from '@mui/material';
const CheckBoxQuestion = ({ title, feedback, setFeedback }) => {
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <FormControl>
      <Typography color={'black'} id="demo-radio-buttons-group-label">
        {title}
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={feedback}
        onChange={handleChange}
      >
        <FormControlLabel
          value="excellent"
          control={<Radio required={true} />}
          label="Excellent"
        />
        <FormControlLabel
          value="good"
          control={<Radio required={true} />}
          label="Good"
        />
        <FormControlLabel
          value="fair"
          control={<Radio required={true} />}
          label="Fair"
        />
        <FormControlLabel
          value="bad"
          control={<Radio required={true} />}
          label="Bad"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CheckBoxQuestion;
