import Vehicle from '../Vehicle';
import data from './data.mock';

// test with real api call
describe('Vehicle Class', () => {
  it('Test getCustomers()', async () => {
    const vehicle = new Vehicle();
    await expect(vehicle.getVehicles('/vehicles')).resolves.toMatchObject({
      data: expect.arrayContaining([
        {
          id: expect.anything(),
          model: expect.anything(),
          registration_number: expect.anything(),
          ownerName: expect.anything(),
          ownerAddress: expect.anything(),
          status: expect.anything()
        }
      ])
    });
  });

  it('Test getCustomers() with status 1', async () => {
    const vehicle = new Vehicle();
    expect(await vehicle.getVehicles({ status: [1] })).toMatchObject({
      data: expect.arrayContaining([
        {
          id: expect.anything(),
          model: expect.anything(),
          registration_number: expect.anything(),
          ownerName: expect.anything(),
          ownerAddress: expect.anything(),
          status: 1
        }
      ])
    });
  });

  it(`Test getCustomers() with ownerName as ${data[0].ownerName}`, async () => {
    const vehicle = new Vehicle();
    expect(await vehicle.getVehicles({ ownerName: [data[0].ownerName] })).toMatchObject({
      data: expect.arrayContaining([
        {
          id: expect.anything(),
          model: expect.anything(),
          registration_number: expect.anything(),
          ownerName: data[0].ownerName,
          ownerAddress: expect.anything(),
          status: expect.anything()
        }
      ])
    });
  });
});

// test with mock data
describe('Vehicle Class', () => {
  it('Test getCustomers()', () => {
    expect(data).toMatchObject(
      expect.arrayContaining([
        {
          id: expect.anything(),
          model: expect.anything(),
          registration_number: expect.anything(),
          ownerName: expect.anything(),
          ownerAddress: expect.anything(),
          status: expect.anything()
        }
      ])
    );
  });
});
