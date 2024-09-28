
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC } from 'react';
import { SearchParams } from '../../types/types';

interface SearchInput{
    value: string;
  setSearch: (query: string) => void;
  setSearchParams: (param: SearchParams ) => void;
    }



export const SearchInput: FC<SearchInput> = ({ value, setSearch, setSearchParams }) => {
  
 
     const handleChange = (e:ChangeEvent<HTMLInputElement> ) => {
        const value = e.target.value;
        setSearch(value);
        setSearchParams({ q: value }); 
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