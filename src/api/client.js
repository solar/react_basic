import axios from 'axios';
import { fromJS } from 'immutable';

const interceptResponse = (response) => {
  if (response.data) {
    Object.assign(response, {
      data: fromJS(response.data),
    });
  }
  return response;
};

const interceptApiError = error => Promise.reject(error);

const client = axios.create();
client.interceptors.response.use(interceptResponse, interceptApiError);

export { client };
