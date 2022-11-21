import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_SERVER_URL,
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

const Axios = setupInterceptorsTo(instance);
export default Axios;
