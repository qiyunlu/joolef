import axios from 'axios';

import { store } from '../index';

const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use((request) => {
  // Do something before request is sent
  let token = store.getState().JWT;
  request.headers = {authorization: token};
  console.log("request: "+JSON.stringify(request));
  return request;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log("response: "+JSON.stringify(response));
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error);
  return Promise.reject(error);
});

export default instance;
