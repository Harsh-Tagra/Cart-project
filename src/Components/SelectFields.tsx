import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Fliterfuncation from './filtterfunction';
import { SetData } from '@/Redux/dataslice';

export default function SelectFields({items}:any) {
  

const dispach= useDispatch()   
  return (
<>
    <TextField
          id="outlined-select-currency"
          select
      defaultValue="ALL"
size='small'
onChange={(e)=>{dispach(SetData(
Fliterfuncation(items,e.target.value,"Size")));
}}
>
<MenuItem key="ALL" value="ALL">ALL</MenuItem>
          
          {items.map(({Size}:any) => (
            <MenuItem key={Size} value={Size}>

              {Size}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        id="outlined-select-currency"
        select
        defaultValue="ALL"
size='small'
onChange={(e)=>{dispach(SetData(
  Fliterfuncation(items,e.target.value,"Type")));
  }}
>
 
<MenuItem key="ALL" value="ALL">ALL</MenuItem>
          
        {items.map(({Type}:any) => (
 
 <MenuItem key={Type} value={Type}>
            {Type}
          </MenuItem>
        ))}
      </TextField>
      </>
  );
}