import { Button, TextField } from "@mui/material"
import List from "@/Components/List"
import UndoIcon from '@mui/icons-material/Undo';
import SelectFields from "@/Components/SelectFields"
import JsonData from '../Components/dummy.json' 
import serach from "@/Components/Serach";
import {  useDispatch, useSelector } from "react-redux";
import { SetData } from "@/Redux/dataslice";
import { useEffect } from "react";
export default function Home() {
const dispach = useDispatch()
useEffect(() => {

  dispach(SetData(JsonData.data))

 
}, [])
const data = useSelector((state: any) => state.Data.Data); 
const number = useSelector((state: any) => state.NumberOfSelectedItem.NumberOfSelectedItem);

 
  return (
   <>
   <div style={{display:"flex",justifyContent:"space-between"}}>
    <div>
   <SelectFields />   <Button startIcon={<UndoIcon/>} size="large">reset</Button>
   </div>
<div >
           <TextField id="outlined-search" onChange={(e)=>
         dispach( SetData( serach(e.target.value,JsonData.data)))} label="Search field" size="small"  type="search" />
           {number==0?<Button variant="contained">add to cart</Button>
           :<Button variant="contained" color="success">continue with {number}</Button>}
           </div>
           </div>
   <List/>
   </>
  )
}
