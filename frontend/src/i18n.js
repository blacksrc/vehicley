import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        filter: 'Filter',
        customer: 'Customer',
        selectCustomer: 'Select Customer',
        selectStatus: 'Select Status',
        status: 'Status',
        vehiclesList: 'Vehicles List',
        model: 'Model',
        registrationNumber: 'Registration Number',
        owner: 'Owner',
        ownerAddress: 'Owner Address',
        noVehicleFound: 'No vehicle found',
        loadingVehicleList: 'Loading Vehicles List',
        all: 'All',
        free: 'Free',
        busy: 'Busy',
        broken: 'Broken'
      }
    },
    fr: {
      translations: {
        filter: 'Filtre',
        customer: 'Client',
        selectCustomer: 'Sélectionner un client',
        selectStatus: 'Sélectionnez le statut',
        status: 'Statut',
        vehiclesList: 'Liste de véhicules',
        model: 'Modèle',
        registrationNumber: "Numéro d'enregistrement",
        owner: 'Propriétaire',
        ownerAddress: 'Adresse du propriétaire',
        noVehicleFound: 'Aucun véhicule trouvé',
        loadingVehicleList: 'Chargement de la liste des véhicules',
        all: 'Toute',
        free: 'Libre',
        busy: 'Occupée',
        broken: 'Ruinée'
      }
    }
  },
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,

  interpolation: {
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;
