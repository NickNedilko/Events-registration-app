
import TextField from '@mui/material/TextField';



export const SearchInput = ({ value, onChange }) => {
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