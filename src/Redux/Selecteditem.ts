import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  NumberOfSelectedItem: 0,
  SelectedItem: []
}

export const NumberOfSelectedItem = createSlice({
  name: 'NumberOfSelectedItem',
  initialState,
  reducers: {


    SetNumberOfSelectedItem: (state:any, action) => {


      state.NumberOfSelectedItem = action.payload;

    },
    SetSelectedItem: (state:any, action) => {


      state.SelectedItem = action.payload;

    },
    updateCartItemQty: (state:any, action) => {
      let index = action.payload.index
      let qty = action.payload.qty

      if (qty == 0) {
        state.SelectedItem.splice(index, 1)
      }
      state.SelectedItem[index].qty = qty
    },
    incrementCartItemQty: (state:any, action) => {
      let index = action.payload.index
      state.SelectedItem[index].qty = state.SelectedItem[index].qty + 1
    },
    decrementCartItemQty: (state:any, action) => {
      let index = action.payload.index
      state.SelectedItem[index].qty = state.SelectedItem[index].qty - 1
      if (state.SelectedItem[index].qty == 0) {
        state.SelectedItem.splice(index, 1)
      }


    },
    Delete: (state:any, action) => {
      let index = action.payload.index

      state.SelectedItem.splice(index, 1)
    },
    updateCartItemWithId: (state:any, action) => {
      let id = parseInt(action.payload.id)
      let qty = action.payload.qty
      let index = state.SelectedItem.findIndex((item:any) => item.id === id)
   
      
      if (index != -1) {
        
        state.NumberOfSelectedItem=  state.NumberOfSelectedItem-state.SelectedItem[index].qty+qty
        state.SelectedItem[index].qty = qty 
        
 
      }
    },
  },
})

export const { Delete, SetNumberOfSelectedItem, SetSelectedItem, decrementCartItemQty, incrementCartItemQty, updateCartItemQty,updateCartItemWithId } = NumberOfSelectedItem.actions


export default NumberOfSelectedItem.reducer