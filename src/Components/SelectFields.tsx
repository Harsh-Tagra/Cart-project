import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Fliterfuncation from './filtterfunction';
import { SetData } from '@/Redux/dataslice';
import { Button} from "@mui/material"
import UndoIcon from '@mui/icons-material/Undo';
import  { useState } from 'react';
export default function SelectFields({items}:any) {
  let itemSet= [...new Set(items.map(item =>item.Type))];
  
const [value1, setvalue1] = useState("ALL")  
const [value2, setvalue2] = useState("ALL")
const dispach= useDispatch()   
  return (
<div style={{display:"flex", width:"17rem",justifyContent:"space-between"}}>
    <TextField
          id="outlined-select-currency"
          select
      
value={value1}
      size='small'
onChange={(e)=>{
  setvalue1(e.target.value),
  dispach(SetData(
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
        value={value2}     
size='small'
onChange={(e)=>{
  setvalue2(e.target.value),dispach(SetData(
 
  Fliterfuncation(items,e.target.value,"Type")));
  }}
>
 
<MenuItem key="ALL" value="ALL">ALL</MenuItem>
          
        {itemSet.map((Type) => (
 
 <MenuItem key={Type} value={Type}>
            {Type}
          </MenuItem>
        ))}
      </TextField>
      <Button startIcon={<UndoIcon/>} onClick={()=>{setvalue1("ALL")
      dispach(SetData(items))
    setvalue2("ALL")
    }} size="large">reset</Button>
      </div>
  );
}