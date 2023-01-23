import { configureStore } from "@reduxjs/toolkit";
import Data from "./dataslice";
import NumberOfSelectedItem  from "./Selecteditem";
export const store = configureStore({
  reducer: {
    Data,
    NumberOfSelectedItem
  },
});