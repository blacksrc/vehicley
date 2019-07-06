import Customer from '../Customer';

jest.mock('./data.mock.js');

describe('Customer Class', () => {
  it('Test getCustomers()', async () => {
    const customer = new Customer();
    const response = await customer.getCustomers('/vehicles', 'GET');
    expect(response).toEqual(
      expect.arrayContaining([
        {
          label: expect.anything(),
          value: expect.anything()
        }
      ])
    );
  });
});
