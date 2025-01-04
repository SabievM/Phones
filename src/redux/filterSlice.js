// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterData: []
}


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setFilteredData: (state, action) => {
      state.filterData = action.payload;
    },
  },
});

export const { setFilteredData } = dataSlice.actions;
export default dataSlice.reducer;
