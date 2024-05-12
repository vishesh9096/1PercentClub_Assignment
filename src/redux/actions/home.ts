import { STOCKS_DATA_API } from '../../config/urls';
import {apiGet, apiPost, setUserData} from '../../utils/utils';
import {saveUserData} from '../reducers/auth';
import { saveStocksData } from '../reducers/home';
import store from '../store';
import {RAPID_API_KEY,RAPID_API_HOST} from '@env';
const {dispatch} = store;

export const saveUserDataToStore = (data: any) => {
  setUserData(data);
  dispatch(saveUserData(data));
};


export const saveStocksDataToStore =(data:any)=>{
  dispatch(saveStocksData(data))
}


export function getstocksapi(data: any) {
  const headers = {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': "real-time-finance-data.p.rapidapi.com"
  }

  return new Promise((resolve, reject) => {
    apiGet(STOCKS_DATA_API, data, headers)
      .then((res: any) => {
        resolve(res);


      })
      .catch(error => {

        reject(error);
      });
  });
}
