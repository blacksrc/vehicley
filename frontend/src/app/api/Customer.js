import API from './API';

class Customer extends API {
  constructor() {
    super();
    this.init();
  }

  async getCustomers() {
    const customers = await this.request('/vehicles', 'GET');
    let customersList = [];
    if (customers.status === 'success' && customers.data !== undefined) {
      customersList = customers.data
        .map(customer => customer.ownerName)
        .filter((value, index, self) => self.indexOf(value) === index)
        .map(customer => ({
          label: customer,
          value: customer
        }));
    }
    return customersList;
  }
}

export default Customer;
