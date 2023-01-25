import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  NumberOfSelectedItem:0,
  SelectedItem:[]
}

export const NumberOfSelectedItem = createSlice({
  name: 'NumberOfSelectedItem',
  initialState,
  reducers: {
    
   
    SetNumberOfSelectedItem: (state, action) => {
       
        
      state.NumberOfSelectedItem = action.payload;
    
    },
    SetSelectedItem: (state, action) => {
       
        
      state.SelectedItem = action.payload;
    
    },
    updateCartItemQty:(state,action)=>{
      let index= action.payload.index
      let qty = action.payload.qty
      console.log(action.pa);
      
      if(qty==0){
        state.SelectedItem.splice(index,1)
      }
      state.SelectedItem[index].qty=qty
    },
    incrementCartItemQty:(state,action)=>{
      let index= action.payload.index
      state.SelectedItem[index].qty= state.SelectedItem[index].qty+1
    },
    decrementCartItemQty:(state,action)=>{
      let index= action.payload.index
      state.SelectedItem[index].qty=state.SelectedItem[index].qty-1
      if(state.SelectedItem[index].qty==0){
        state.SelectedItem.splice(index,1)
      }
    

    },
    Delete:(state,action)=>{
      let index= action.payload.index

    state.SelectedItem.splice(index,1)    
  }
  },
})

export const {Delete,SetNumberOfSelectedItem,SetSelectedItem,decrementCartItemQty,incrementCartItemQty,updateCartItemQty} = NumberOfSelectedItem.actions


export default NumberOfSelectedItem.reducer