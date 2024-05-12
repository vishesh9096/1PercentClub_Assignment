import {createSlice} from '@reduxjs/toolkit';
import { getstocksapi } from '../actions/home';

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState: {
    home: [],
    stocksdata:{},
  },

 
  reducers: {
    saveHomeData: (state, action) => {
      state.home = action.payload;
    },
    saveStocksData:(state, action)=>{
      state.stocksdata= action.payload

    }
  },
});
export const {saveHomeData} = homeSlice.actions;
export const {saveStocksData} = homeSlice.actions;
export default homeSlice.reducer;
