import  React ,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';

const currencies = [
  {
    value: 'id',
    label: 'ID',
  },
  {
    value: 'name',
    label: 'User Name',
  },
  {
    value: 'email',
    label: 'Email',
  }
];

export default function SelectTextFields({setUserSearch}) {
  const [currency, setCurrency] = useState('id');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  return (
      <div style={{display:'flex', marginBottom:20}}>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={currency}
                  onChange={handleChange}
                  >
                      {currencies.map(option => 
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                          )}
                </TextField>
            </Box>
            <FormControl variant="filled" style={{marginTop:'7px'}}>
                <InputLabel htmlFor="component-filled">{currency}</InputLabel>
                <FilledInput id="component-filled" onChange={(e)=> setUserSearch({"search":e.target.value ,"catagorei":currency})}  />
            </FormControl>         
    </div>
  );
}