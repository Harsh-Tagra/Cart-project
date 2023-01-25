import { Button, TextField } from "@mui/material"
import List from "@/Components/List"
import SelectFields from "@/Components/SelectFields"
import JsonData from '../Components/dummy.json' 
import serach from "@/Components/Serach";
import {  useDispatch, useSelector } from "react-redux";
import { SetData } from "@/Redux/dataslice";
import { useEffect } from "react";
import {  useRouter } from "next/router";

export default function Home() {
  const router= useRouter();
  const dispach = useDispatch()
useEffect(() => {

  dispach(SetData(JsonData.data))

 
}, [])
const data = useSelector((state: any) => state.Data.Data); 
const number = useSelector((state: any) => state.NumberOfSelectedItem.NumberOfSelectedItem);

 
  return (
   <>
   <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
    <div>
   <SelectFields items={JsonData.data} /> 
   </div>
<div style={{display:"flex",width:"23rem", justifyContent:"space-between", alignItems:"center"}} >

           <TextField id="outlined-search" onChange={(e)=>
         dispach( SetData( serach(e.target.value,JsonData.data)))} label="Search field" size="small"  type="search" />
           <Button variant="contained"  onClick={()=>router.push("/Cart")}>add to cart</Button>
           </div>
           </div>
   <List/>
   </>
  )
}
