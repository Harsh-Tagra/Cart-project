import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { updateItemQty } from '@/Redux/dataslice';
import { decrementCartItemQty, Delete, incrementCartItemQty, updateCartItemQty } from '@/Redux/Selecteditem';
import { Button, Divider } from '@mui/material';
import { getQtyStringToInt } from '@/utils/utils-generic';

export default function CartList() {
  const items = useSelector((state: any) => state.NumberOfSelectedItem.SelectedItem)
  console.log(items);
  
const Dispatch = useDispatch()
  const updateItem= (index:number,qtyString:number)=>{
    console.log("qty",qtyString);
    let qty=getQtyStringToInt(qtyString)
    Dispatch(updateCartItemQty({
      index,
      qty
    }))
  }
  const add =(index:number)=>{
    Dispatch(incrementCartItemQty({index}))}
  const remove =(index:number)=>{
   Dispatch(decrementCartItemQty({index}))  
  }
  console.log(items);
  
  return (
    <TableContainer style={{boxShadow:"none" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell>produts</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          
          </TableRow>
    
        </TableHead>
        
        <TableBody>
          {items.map((row:any, index:any) => (
            
    <>
    {console.log(row)}      
      <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell style={{ display: "flex" ,alignItems:"center"}} >
            
                <IconButton onClick={() => {
 Dispatch(Delete(index))
 }}><CloseIcon />  </IconButton>
                <img src={row.Image} width="70px" />

                {row.Name}

              </TableCell>
              <TableCell align="right">{row.Price
              }</TableCell>
 
              <TableCell align="right" >
              <Button  color="inherit"style={{  borderBottom:"1px solid #dfd2d2 ", borderTop:"1px solid #dfd2d2 ", borderLeft:"1px solid #dfd2d2 ", borderRadius:"15px 0px  0px 15px"}}onClick={()=>{remove(index)}}>-</Button>
              
                <TextField  size='small' value={row.qty}  onChange={(e)=>updateItem(index,e.target.value)}  style={{width:'50px',border:"1px"}}></TextField>
                <Button color='inherit' style={{borderBottom:"1px solid #dfd2d2",borderTop:"1px solid #dfd2d2  ",borderRight:"1px solid #dfd2d2  ", borderRadius:"0px 15px 15px 0px"}} onClick={()=>{add(index)}} >+</Button>
              
              </TableCell>
              <TableCell align="right">{row.Price * row.qty}</TableCell>

            </TableRow>
            <Divider></Divider>
 </>           
))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}