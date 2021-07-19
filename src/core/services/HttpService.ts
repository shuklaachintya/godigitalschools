import axios from 'axios';

import { token } from '../../react-keycloak';

class HttpService {
  service: any;
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response : any) {
    return response;
  }

  handleError = (error : any) => {
    switch (error.response.status) {
      case 401:
        //this.redirectTo(document, '/')
        break;
      case 404:
        //this.redirectTo(document, '/404')
        break;
      case 503:
        this.redirectTo(document,'/503')
        break;
      default:
        //this.redirectTo(document, '/500')
        break;
    }
    return Promise.reject(error)
  }

  //set headers
	getConfig() {
		return {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${token}`,
			},
		};
	}

  redirectTo  = (document: any, path: string) => {
    document.location= path
  }
    
  get(path: string) {
    return this.service.get(path, this.getConfig());
  }
  post(path: string, payload?: object, callback?: any) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }, this.getConfig());
    // return callback(response.status, response.data);
  }
}

export default HttpService;