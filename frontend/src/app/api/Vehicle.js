import API from './API';

class Vehicle extends API {
  constructor() {
    super();
    this.init();
  }

  async getVehicles(params) {
    const vehicles = await this.request('/vehicles', 'GET', params);
    return vehicles;
  }
}

export default Vehicle;
