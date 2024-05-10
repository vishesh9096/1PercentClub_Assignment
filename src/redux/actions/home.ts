import {setUserData} from '../../utils/utils';
import {saveUserData} from '../reducers/auth';
import store from '../store';

const {dispatch} = store;

export const saveUserDataToStore = (data: any) => {
  setUserData(data);
  dispatch(saveUserData(data));
};
