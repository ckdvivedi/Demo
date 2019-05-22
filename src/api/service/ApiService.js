import api from 'axios/index';
import 'es6-symbol/implement';
import {
  apiNetworkRequest,
  apiNetworkResponse,
  requestNetworkError,
  responseNetworkError
} from '../interceptors/networkInterceptor';
import theme from '../../../theme';


const { BASE_API_URL } = theme.config;

const singletonNetwork = Symbol('singletonNetwork');
const singletonEnforcer = Symbol('singletonEnforcer');

class ApiService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    this.apiNetworkInstance = api.create({
      baseURL: BASE_API_URL,
    });
    this.apiNetworkInstance.interceptors.request.use(apiNetworkRequest, requestNetworkError);
    this.apiNetworkInstance.interceptors.response.use(apiNetworkResponse, responseNetworkError);
  }

  static get instance() {
    // Try to get an efficient singleton
    if (!this[singletonNetwork]) {
      this[singletonNetwork] = new ApiService(singletonEnforcer);
    }

    return this[singletonNetwork];
  }

  get = params => this.apiNetworkInstance({
    method: 'GET',
    ...params
  });

  post = params => this.apiNetworkInstance({
    method: 'POST',
    ...params
  });

  put = params => this.apiNetworkInstance({
    method: 'PUT',
    ...params
  });

  patch = params => this.apiNetworkInstance({
    method: 'PATCH',
    ...params
  });

  delete = params => this.apiNetworkInstance({
    method: 'DELETE',
    ...params
  });
}

export default ApiService.instance;
