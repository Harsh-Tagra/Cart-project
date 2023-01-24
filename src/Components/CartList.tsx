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
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

export default function CartList() {
  const items = useSelector((state: any) => state.NumberOfSelectedItem.SelectedItem)


  return (
    <TableContainer style={{ width: "60vw" }} component={Paper}>
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
          {items.map((row, index) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell style={{ display: "flex" }} >
                <IconButton onClick={() => {
                  console.log(index);
                }}><CloseIcon />  </IconButton>
                <img src={row.Image} width="70px" />

                {row.Name}

              </TableCell>
              <TableCell align="right">{row.Price
              }</TableCell>
 
              <TableCell align="right" style={{ display: "flex" }}>
                {console.log("here", row.qty)
                }
                <button >+</button>           <TextField size='small' value={row.qty} style={{width:"35px"}}/>
                <button>-</button>
              </TableCell>
              <TableCell align="right">{row.Price * 1}</TableCell>

              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}