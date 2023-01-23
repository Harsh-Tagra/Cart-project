import { Button, TextField } from "@mui/material"
import List from "Components/List"
import UndoIcon from '@mui/icons-material/Undo';
import SelectFields from "Components/SelectFields"
import JsonData from '../../Components/dummy.json' 
export default function Home() {

  return (
   <>
   <div style={{display:"flex",justifyContent:"space-between"}}>
    <div>
   <SelectFields/><SelectFields/>
   <Button startIcon={<UndoIcon/>} size="large">reset</Button>
   </div>
<div >
           <TextField id="outlined-search" label="Search field" size="small"  type="search" />
           <Button variant="contained">add to cart</Button>
           </div>
           </div>
   <List rows={JsonData.data}/>
   </>
  )
}
