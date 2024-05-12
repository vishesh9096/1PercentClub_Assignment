
export const API_BASE_URL = 'http://localhost:8080';
export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const EMAIL_LOGIN_API = getApiUrl('/auth/login');
export const STOCKS_DATA_API = 'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en'


