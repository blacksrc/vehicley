module.exports = () => {
  const data = {
    vehicles: [
      {
        id: "YS2R4X20005399401",
        model: "Benz",
        registration_number: "DEF456",
        ownerName: "Kalles Grustransporter",
        ownerAddress: "Cementvägen 8, 111 11 Södertälje"
      },
      {
        id: "VLUR4X20009093588",
        model: "Audi",
        registration_number: "SEP456",
        ownerName: "Kalles Grustransporter",
        ownerAddress: "Cementvägen 8, 111 11 Södertälje"
      },
      {
        id: "VLUR4X20009048066",
        model: "Lada",
        registration_number: "GHI789",
        ownerName: "Kalles Grustransporter",
        ownerAddress: "Cementvägen 8, 111 11 Södertälje"
      },
      {
        id: "YS2R4X20005388011",
        model: "BMW",
        registration_number: "JKL012",
        ownerName: "Johans Bulk",
        ownerAddress: "Balkvägen 12, 222 22 Stockholm"
      },
      {
        id: "YS2R4X20005387949",
        model: "Jeep",
        registration_number: "MNO345",
        ownerName: "Johans Bulk",
        ownerAddress: "Balkvägen 12, 222 22 Stockholm"
      },
      {
        id: "FLUR4X20009048266",
        model: "Ford",
        registration_number: "PQR678",
        ownerName: "Haralds Värdetransporter",
        ownerAddress: "Budgetvägen 1, 333 33 Uppsala"
      },
      {
        id: "YS2R4X20005387055",
        model: "Aston Martin",
        registration_number: "STU901",
        ownerName: "Haralds Värdetransporter",
        ownerAddress: "Budgetvägen 1, 333 33 Uppsala"
      },

      {
        id: "VPUR4X20009128060",
        model: "Peykan",
        registration_number: "STU901",
        ownerName: "Siamak A.Motlagh",
        ownerAddress: "Num 3, Bingo st, Web area, Tehran"
      },

      {
        id: "ZS2R4X21005337057",
        model: "Samand",
        registration_number: "FTU911",
        ownerName: "Siamak A.Motlagh",
        ownerAddress: "Num 3, Bingo st, Web area, Tehran"
      },

      {
        id: "PL2R4X21005389757",
        model: "Dena",
        registration_number: "LKU921",
        ownerName: "Siamak A.Motlagh",
        ownerAddress: "Num 3, Bingo st, Web area, Tehran"
      }
    ]
  };

  function randomStatus(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  data.vehicles.map(vehicle => {
    vehicle.status = randomStatus(1, 3);
  });

  return data;
};
