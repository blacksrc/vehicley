import API from './API';

class Vehicle extends API {
  constructor() {
    super();
    this.init();
  }

  async getVehicles() {
    const vehicles = await this.request('/vehicles');
    return vehicles;
  }
}

export default Vehicle;
