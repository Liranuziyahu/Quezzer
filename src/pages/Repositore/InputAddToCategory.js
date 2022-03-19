import  React ,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
      value: 'React',
      label: 'React',
    },
    {
      value: 'JS',
      label: 'JS',
    },
    {
      value: 'Angular',
      label: 'Angular',
    }
  ];

const InputAddToCategory = ({setCategory}) => {
      const [currency, setCurrency] = useState('JS');
      const handleChange = (event) => {
        setCurrency(event.target.value);
        setCategory(event.target.value) 

      };
    
    return (
        <>
          <div style={{display:'flex', marginBottom:20}}>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Category"
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
    </div>
        </>
    )
}

export default InputAddToCategory

// Repositore = מאגר