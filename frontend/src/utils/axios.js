import axios from 'axios';

const BASE_URL = '//api.mtnhao.com';

export const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (e) => {
    console.log(e.message, '数据请求错误！');
    throw e;
  }
);
