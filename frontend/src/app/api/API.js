import axios from 'axios';
import { api } from '../config';

class API {
  constructor(config = {}) {
    this.config = {
      ...{
        domain: api.domain,
        port: api.port,
        version: api.version,

        url: {
          base: null
        }
      },
      ...config
    };

    this.config.url.base = API.createBaseUrl(this.config.domain, this.config.port, this.config.version);
    this.params = null;
    this.path = null;
    this.axiosObject = null;
  }

  init(params = {}) {
    this.params = {
      ...{
        baseURL: this.config.url.base,
        timeout: 5000
      },
      ...params
    };

    this.params.headers = {
      ...{
        'Content-Type': 'application/json'
      },
      ...params.headers
    };
  }

  async request(path, method = 'GET', data = {}) {
    this.params.url = path;
    this.params.method = method;
    this.params.data = data;
    this.axiosObject = axios.create(this.params);

    const result = await this.axiosObject
      .request({
        method,
        url: path,
        data
      })
      .then(
        response => ({
          status: 'success',
          data: response.data,
          response
        }),
        error => ({
          status: 'success',
          data: error.response,
          response: error.response
        })
      );

    return result;
  }

  static createBaseUrl(domain, port, version) {
    return version ? `${domain}:${port}/v${version}/` : `${domain}:${port}/`;
  }
}

export default API;
