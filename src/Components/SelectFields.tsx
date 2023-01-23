import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

export default function SelectFields() {

  const data = useSelector((state: any) => state.Data.Data);
   
  return (
<>
    <TextField
          id="outlined-select-currency"
          select
          defaultValue="EUR"
size='small'
>
          {data.map(({Size}:any) => (
            <MenuItem key={Size} value={Size}>
              {Size}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        id="outlined-select-currency"
        select
        defaultValue="EUR"
size='small'
>
        {data.map(({Type}:any) => (
          <MenuItem key={Type} value={Type}>
            {Type}
          </MenuItem>
        ))}
      </TextField>
      </>
  );
}