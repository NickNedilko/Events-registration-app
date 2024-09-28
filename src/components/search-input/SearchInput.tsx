
import TextField from '@mui/material/TextField';
import { FC } from 'react';

interface SearchInput{
    value: string;
  setSearch: (query: string) => void;
  setSearchParams: (param) => void;
    }

export const SearchInput: FC<SearchInput> = ({ value, setSearch, setSearchParams }) => {
  
 

     const handleChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        setSearchParams({ q: value }); // Обновляем строку запроса
    };
  return (
    <TextField
      variant="outlined"
      placeholder="Search partcipants..."
      value={value}
      onChange={handleChange}
      fullWidth
    />
  );
};