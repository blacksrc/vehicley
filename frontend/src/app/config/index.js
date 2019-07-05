export const api = {
  domain: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT,
  version: process.env.REACT_APP_API_VERSION
};

export const Statuses = [
  { value: null, label: 'All' },
  { value: 1, label: 'Free', color: '#00897b' },
  { value: 2, label: 'Busy', color: '#e53935' },
  { value: 3, label: 'Out of service', color: '#999999' }
];
