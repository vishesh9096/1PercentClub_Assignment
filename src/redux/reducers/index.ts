import {combineReducers} from '@reduxjs/toolkit';

import auth from './auth';
import home from './home';
import types from '../types';

const appReducer = combineReducers({
  auth,
  home,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
