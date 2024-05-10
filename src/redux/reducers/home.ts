import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState: {
    home: [],
  },
  reducers: {
    saveHomeData: (state, action) => {
      state.home = action.payload;
    },
  },
});
export const {saveHomeData} = homeSlice.actions;
export default homeSlice.reducer;
