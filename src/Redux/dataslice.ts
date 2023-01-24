import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Data:[]
}

export const Data = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    
   
    SetData: (state, action) => {
       
        
      state.Data = action.payload.map((data:any)=>({...data,qty:1}));
      console.log(state.Data);
    },
    updateItemQty:(state,action)=>{
      let index= action.payload.index
      let qty = action.payload.qty
      state.Data[index].qty=qty
    }
  },
})

// Action creators are generated for each case reducer function
export const {SetData,updateItemQty} = Data.actions

export default Data.reducer