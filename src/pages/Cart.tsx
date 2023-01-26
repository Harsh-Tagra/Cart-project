import CartList from '@/Components/CartList'
import totalprice from '@/Components/totalprice'
import Button from '@mui/material/Button/Button'
import Card from '@mui/material/Card/Card'
import Divider from '@mui/material/Divider/Divider'
import { rootShouldForwardProp } from '@mui/material/styles/styled'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const items = useSelector((state: any) => state.NumberOfSelectedItem.SelectedItem);
  
 const Price = totalprice(items.length,items)
  
return (
    <>
    <div style={{display:"flex",justifyContent:"space-between"}}>
  <CartList/>
    <Card style={{padding:"30px", width:"25vw", maxHeight:"40vh",margin:"0px 55px 0px 55px", boxShadow:"0px 1px 16px 7px rgb(0 0 0 / 7%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}>
        
        <h1>Cart totals</h1>
  
       <h4 style={{display:"flex", justifyContent:"space-between"}}>Subtotal <div>{Price} </div></h4>
       <Divider></Divider>
       <h4 style={{display:"flex", justifyContent:"space-between"}}>Total <div>{Price}</div></h4>
        <center>
        <Button variant="contained" style={{borderRadius:"40px"}} >procide to check out</Button>
        </center>
        </Card>
        </div>
        </>
  )
}

export default Cart