import axios from 'axios';
import store from '../store';
import { Actions } from '../store/redux/auth/authActions';
// import Noty from './notifications/Noty';

// TODO: Axios interceptors need refactors.

function configureAxios(axiosModule) {
  const AUTH_TOKEN = store.getState().firebase.auth.stsTokenManager
    ? store.getState().firebase.auth.stsTokenManager.accessToken
    : null;
  axiosModule.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
  axiosModule.defaults.baseURL =
    'https://api-gateway-dot-optimal-harbor-222608.appspot.com/';

  axiosModule.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response === undefined) {
        //  Noty('Not connected!', 'error').show();
        return Promise.reject(error);
      }
      if (error.response.status === 401) {
        const NEW_ACCESS_TOKEN = store.getState().firebase.auth.stsTokenManager
          ? store.getState().firebase.auth.stsTokenManager.accessToken
          : null;
        if (NEW_ACCESS_TOKEN) {
          axiosModule.defaults.headers.common.Authorization = `Bearer ${NEW_ACCESS_TOKEN}`;
        } else {
          store.dispatch(Actions.signout());
        }
      }
      return Promise.reject(error);
    }
  );
}
configureAxios(axios);

export default axios;
