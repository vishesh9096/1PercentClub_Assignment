import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const orderSlice = createSlice({
  name: 'orderReducer',
  initialState: {
    orders: {}, // Initialize as an empty object
  },
  reducers: {
    saveOrderData: (state, action) => {
      // Update orders as an object with order IDs as keys
      const id = uuidv4();
      state.orders[id] = action.payload;
    },
    deleteOrderData: (state, action) => {
        const idToDelete = action.payload;
        // Use JavaScript's delete operator to remove the order by ID
        delete state.orders[idToDelete];
      },
  },
});

export const { saveOrderData,deleteOrderData } = orderSlice.actions;
export default orderSlice.reducer;