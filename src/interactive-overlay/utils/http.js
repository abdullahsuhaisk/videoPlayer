import http from '../common/axios';

const setHeaderHelper = (httpModule) => (key, value) => {
  httpModule.defaults.headers.common[key] = value;
};
export const setHttpHeader = setHeaderHelper(http);

export default http;
