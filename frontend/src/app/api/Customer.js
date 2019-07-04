import API from './API';

class Customer extends API {
  constructor() {
    super();
    this.init();
  }

  async getCustomers() {
    const customers = await this.request('/customers');
    return customers;
  }
}

export default Customer;
