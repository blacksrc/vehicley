import axios from 'axios';
import { api } from '../config';

// Base API class. This Class is not for direct usage.
// Extend your model class from API class.
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

  /**
   * Initialize api axios config. Merges user prefered config with default configs
   *
   * @param params object
   */
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

  /**
   * Make http request.
   *
   * @param path string
   * @param method string (GET|POST|PUT|...)
   * @param params object (query params)
   * @param data object (request body data)
   *
   * @return object (response object)
   */
  async request(path, method = 'GET', params = {}, data = {}) {
    this.params.url = path;
    this.params.method = method;
    this.params.data = data;
    this.axiosObject = axios.create(this.params);

    const result = await this.axiosObject
      .request({
        method,
        url: path,
        params
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

  /**
   * Create base url of api
   *
   * @param domain string
   * @param port string
   * @param version string | null
   *
   * @return string
   */
  static createBaseUrl(domain = 'http://localhost', port = 80, version = null) {
    return version ? `${domain}:${port}/v${version}/` : `${domain}:${port}/`;
  }
}

export default API;
