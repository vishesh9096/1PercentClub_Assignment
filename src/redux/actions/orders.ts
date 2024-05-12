
import { deleteOrderData, saveOrderData } from '../reducers/orders';
import store from '../store';
const {dispatch} = store;


export const saveOrderDataToStore = (data: any) => {
    dispatch(saveOrderData(data));
  };

  export const deleteOrderFromStore = (data: any) => {
    dispatch(deleteOrderData(data));
  };



