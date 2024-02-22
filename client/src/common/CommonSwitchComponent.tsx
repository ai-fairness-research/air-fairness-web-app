import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

// interface FormProps {
//   value: string;
//   label: string;
// }

interface CommonSwitchComponentProps {
  question: string;
  choices: string[];
  selectedOption?: string;
  onOptionChange?: (selectedOption: string) => void;
}

const CommonSwitchComponent: React.FC<CommonSwitchComponentProps> = ({
  question,
  choices,
  selectedOption,
  onOptionChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onOptionChange)
      onOptionChange((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <FormControl>
        {question !== "" && (
          <FormLabel id="radio-buttons-group-label">
            <Typography
              component="span"
              sx={{ color: "#000", fontWeight: 500 }}
            >
              {question}{" "}
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#94A4C4", fontStyle: "italic" }}
            >
              Select one option.
            </Typography>
          </FormLabel>
        )}

        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          name="radio-buttons-group"
          value={selectedOption}
          onChange={handleChange}
        >
          {choices.map((choice) => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Radio />}
              label={choice}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default CommonSwitchComponent;
