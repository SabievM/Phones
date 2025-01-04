import { configureStore } from "@reduxjs/toolkit";
import {addItems} from "./slices";
import {dataSlice} from './filterSlice'

export const store = configureStore({
    reducer: {
      addPhone: addItems.reducer,
      dataSlice: dataSlice.reducer,
    },
    
  })