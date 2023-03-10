import * as React from 'react';
import { alpha } from '@mui/material/styles';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { SetNumberOfSelectedItem, SetSelectedItem, updateCartItemWithId } from '@/Redux/Selecteditem';
import { updateItemQty } from '@/Redux/dataslice';
import { getQtyStringToInt } from '@/utils/utils-generic';
interface Data {
Images:String;
  Color: string;
  Price: string;
  Name: string;
  Buy: string;
  Stock: string;

}


// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'Images',
    numeric: false,
    disablePadding: false,
    label: 'Images',
  },
  {
    id: 'Name',
    numeric: true,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'Color',
    numeric: true,
    disablePadding: false,
    label: 'Color',
  },
  {
    id: 'Price',
    numeric: true,
    disablePadding: true,
    label: 'Price',
  },
  {
    id: 'Stock',
    numeric: true,
    disablePadding: false,
    label: 'status',
  },
  {
    id: 'Buy',
    numeric: true,
    disablePadding: false,
    label: 'Buy',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead  style={{backgroundColor:"rgb(235 235 235)" ,borderBottom: "solid grey"}}>
      <TableRow>
      
        {headCells.map((headCell:any) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
          
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.Image ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
          <TableCell >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function List() {
  const rows= useSelector((state: any) => state.Data.Data);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('');
  // const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
const selected= useSelector((state:any) => state.NumberOfSelectedItem.SelectedItem)
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // const newSelected = rows.map((n:any) => n.Name);

      // setSelected(rows);
      Dispatch(SetSelectedItem(rows));
      return;
    }
    // setSelected([]);
    Dispatch(SetSelectedItem([]));
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string,row:any) => {
    // setSelected(row)

    const selectedIndex = selected.findIndex((data:any)=>data.Name===row.Name);
    let newSelected:any= [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }


    // setSelected(newSelected);
    Dispatch(SetSelectedItem(newSelected));

    // const selectedIndex = selected.indexOf(name);
    // let newSelected: readonly string[] = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }


    // setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.findIndex((data:any)=>data.Name===name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const Dispatch =useDispatch()
const updateItem= (index:number,stringQty:any,id:number)=>{
  let qty=getQtyStringToInt(stringQty)
  
   Dispatch(updateItemQty({
    index,
    qty
  }))
  Dispatch(updateCartItemWithId({
    id,
    qty
  }))
  
}
 useEffect(() => {
  
 Dispatch(SetNumberOfSelectedItem(selected.length))
 Dispatch(SetSelectedItem(selected));  
 }, [selected])
 
 return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 800 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
         
          >
            <EnhancedTableHead
              
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              
            />
            <TableBody style={{backgroundColor:"rgb(249 246 246)"}} >
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row:any, index:number) => {
                  const isItemSelected = isSelected(row.Name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                    >
                   
                   <TableCell align='left'
                      >
             <img src={row.Image} width="70px"/>
                      </TableCell>                 
                      <TableCell
                        align='right'
                      >
                        {row.Name}
                      </TableCell>
                      <TableCell align="right">{row.Color}</TableCell>
                      <TableCell align="right"> ${row.Price
}</TableCell>
                      <TableCell align="right">{row.Stock}</TableCell>
                      
                      <TableCell align="right" >
 
                        <TextField  size='small' defaultValue="1" onChange={(e)=>updateItem(index,e.target.value,row.id)} style={{width:'50px'}}></TextField> 
                        <ShoppingCartIcon fontSize="large"  style={{ color:"white", width:"70px", height:"6.5vh",backgroundColor:"black"}} />
                      </TableCell>
                      <TableCell style={{width:"10px"}}>
 
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                     
                          
                      onClick={(event) => handleClick(event, row.Name,row)}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                          
                        />
                        
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        style={{backgroundColor:"rgb(249 246 246)"}}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
 
    </Box>
  );
}