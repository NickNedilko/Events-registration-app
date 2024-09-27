
import TextField from '@mui/material/TextField';
import { FC } from 'react';

interface SearchInput{
    value: string;
    onChange: () => void;
    }

export const SearchInput:FC<SearchInput> = ({ value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search partcipants..."
      value={value}
      onChange={onChange}
     
      fullWidth
    />
  );
};