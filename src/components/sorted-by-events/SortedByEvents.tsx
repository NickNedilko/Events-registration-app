
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";
import { Wrapper } from "./SortedByEvents.styled";

interface SortedByEvents {
    sortBy: string;
    handleChange: (sortBy:any) => void;
}


const SortedByEvents: FC<SortedByEvents> = ({ sortBy, handleChange }) => {
    
     const onClick = (event: any) => {
    const selectedValue = event.target.value;
    handleChange({ sortBy: selectedValue }); // Устанавливаем новый параметр в строку запроса
  };
    return (
        <Wrapper>
            <FormControl fullWidth variant="outlined">
      <InputLabel id="sort-by-label">Sort events By</InputLabel>
      <Select
        labelId="sort-by-label"
        value={sortBy}
        onChange={onClick}
        label="Sort events By"
      >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="eventDate">Event Date</MenuItem>
        <MenuItem value="organizer">Organizer</MenuItem>
      </Select>
    </FormControl>
        </Wrapper>
  ) ;
};

export default SortedByEvents;
