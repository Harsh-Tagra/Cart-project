import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  NumberOfSelectedItem:0
}

export const NumberOfSelectedItem = createSlice({
  name: 'NumberOfSelectedItem',
  initialState,
  reducers: {
    
   
    SetNumberOfSelectedItem: (state, action) => {
       
        
      state.NumberOfSelectedItem = action.payload;
    
    },
  },
})

// Action creators are generated for each case reducer function
export const {SetNumberOfSelectedItem} = NumberOfSelectedItem.actions

export default NumberOfSelectedItem.reducer