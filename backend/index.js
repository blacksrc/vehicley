module.exports = () => {
  const data = {
    customers: [
      {
        id: 1,
        name: "Kalles Grustransporter",
        address: "Cementvägen 8, 111 11 Södertälje",
        vehicles: [
          {
            id: "YS2R4X20005399401",
            model: "Benz",
            registration_number: "ABC123"
          },
          {
            id: "VLUR4X20009093588",
            model: "Audi",
            registration_number: "DEF456"
          },
          {
            id: "VLUR4X20009048066",
            model: "Lada",
            registration_number: "GHI789"
          }
        ]
      },
      {
        id: 2,
        name: "Johans Bulk",
        address: "Balkvägen 12, 222 22 Stockholm",
        vehicles: [
          {
            id: "YS2R4X20005388011",
            model: "BMW",
            registration_number: "JKL012"
          },
          {
            id: "YS2R4X20005387949",
            model: "Jeep",
            registration_number: "MNO345"
          }
        ]
      },
      {
        id: 3,
        name: "Haralds Värdetransporter",
        address: "Budgetvägen 1, 333 33 Uppsala",
        vehicles: [
          {
            id: "VLUR4X20009048066",
            model: "Ford",
            registration_number: "PQR678"
          },
          {
            id: "YS2R4X20005387055",
            model: "Aston Martin",
            registration_number: "STU901"
          }
        ]
      },
      {
        id: 4,
        name: "Siamak A.Motlagh",
        address: "Num 3, Bingo st, Web area, Tehran",
        vehicles: [
          {
            id: "VPUR4X20009128060",
            model: "Peykan",
            registration_number: "KQR672"
          },
          {
            id: "ZS2R4X21005337057",
            model: "Samand",
            registration_number: "FTU911"
          },
          {
            id: "PL2R4X21005389757",
            model: "Dena",
            registration_number: "LKU921"
          }
        ]
      }
    ]
  };

  function randomStatus(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  data.customers.map(customer => {
    customer.vehicles.map(vehicle => {
      vehicle.status = randomStatus(1, 3);
    });
  });

  return data;
};
