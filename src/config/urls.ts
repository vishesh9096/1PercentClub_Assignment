
export const API_BASE_URL = 'http://localhost:8080';
export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const EMAIL_LOGIN_API = getApiUrl('/auth/login');


