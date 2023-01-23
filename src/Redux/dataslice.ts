import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Data:[]
}

export const Data = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    
   
    SetData: (state, action) => {
       
        
      state.Data = action.payload;
      console.log(state.Data);
    },
  },
})

// Action creators are generated for each case reducer function
export const {SetData} = Data.actions

export default Data.reducer