import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import actions from '../redux/actions';

export async function getHeaders() {
  const userData = await AsyncStorage.getItem('userData');
  if (userData) {
    const userDataObject = JSON.parse(userData);
    console.log(userDataObject, 'hello user');
    if (
      userDataObject?.token !== 'guest_login' &&
      userDataObject?.token !== undefined
    ) {
      return {
        Authorization: `Bearer ${userDataObject?.token}`,
      };
    }
  }
  return {};
}

export function setUserData(data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

export function setItem(key: string, data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key: string) {
  return new Promise(resolve => {
    AsyncStorage.getItem(key).then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export function removeItem(key: string) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate() {
  return AsyncStorage.clear();
}

export async function getUserData() {
  return new Promise(resolve => {
    AsyncStorage.getItem('userData').then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem('userData');
}

export async function apiReq(
  endPoint: string,
  data: any,
  method: string,
  headers: any,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    console.log(getTokenHeader, 'get token headerrr', requestOptions);

    headers = {
      ...getTokenHeader,
      ...headers,
    };

    console.log('API Endpoint :-> ', endPoint);
    console.log('API Data :-> ', data);
    console.log('API Headers :-> ', headers);

    const axiosObj: any = {
      method,
      url: endPoint,
      headers,
    };

    if ((axiosObj.headers['Content-Type'] = 'application/json')) {
      axiosObj.data = data;
    } else {
      axiosObj.params = data;
    }

    axios(axiosObj)
      .then((result: any) => {
        console.log('API Result :->', result);
        if (result?.data?.status === false) {
          return rej(result?.data);
        }
        if (result?.data?.ResponseType === 'Session Expired') {
          actions.saveUserDataToStore({});
        }
        return res(result?.data);
      })
      .catch((error: any) => {
        console.log('API error =>', error);

        const errorResponse = error?.response;

        if (errorResponse?.status === 401) {
          clearUserData();
          actions.saveUserDataToStore({});
        }

        if (error?.response?.data) {
          if (!error?.response?.data?.message) {
            return rej({
              ...error?.response?.data,
              msg: error?.response?.data?.message || 'Network Error',
            });
          }
          return rej(error?.response?.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
      });
  });
}

export function apiPost(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(
  endPoint?: any,
  data?: any,
  headers = {},
  requestOptions?: any,
) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}
