import API from './API';

class Vehicle extends API {
  constructor() {
    super();
    this.init();
  }

  /**
   * Returns vehicles list by the given params.
   *
   * @param params object (query params)
   *
   * @return object (response object)
   */
  async getVehicles(params = {}) {
    const vehicles = await this.request('/vehicles', 'GET', params);
    return vehicles;
  }
}

export default Vehicle;
