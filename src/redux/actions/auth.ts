import {
  EMAIL_LOGIN_API,
} from '../../config/urls';
import {apiPost, setUserData} from '../../utils/utils';
import {saveUserData} from '../reducers/auth';
import store from '../store';

const {dispatch} = store;

export const saveUserDataToStore = (data: any) => {
  setUserData(data);
  dispatch(saveUserData(data));
};

export function emailLoginApi(data: any) {
  const headers = {
    'Content-Type': 'application/json',
  };
  return new Promise((resolve, reject) => {
    apiPost(EMAIL_LOGIN_API, data, headers)
      .then((res: any) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
