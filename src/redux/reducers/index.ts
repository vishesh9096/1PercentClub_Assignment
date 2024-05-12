import {combineReducers} from '@reduxjs/toolkit';

import auth from './auth';
import home from './home';
import types from '../types';
import orders from './orders';
import { clearAsyncStorate } from '../../utils/utils';

const appReducer = combineReducers({
  auth,
  home,
  orders
});

const rootReducer = (state: any, action: any) => {
  if (action.type === types.CLEAR_REDUX_STATE) {
    state = undefined;
    clearAsyncStorate()
  }
  return appReducer(state, action);
};

export default rootReducer;
