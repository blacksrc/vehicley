export const api = {
  domain: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT,
  version: process.env.REACT_APP_API_VERSION
};

export const Statuses = [
  { value: null, label: 'All' },
  { value: 1, label: 'Free' },
  { value: 2, label: 'Busy' },
  { value: 3, label: 'Out of service' }
];
