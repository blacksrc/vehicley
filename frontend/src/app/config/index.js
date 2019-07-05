import i18next from 'i18next';

export const api = {
  domain: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT,
  version: process.env.REACT_APP_API_VERSION
};

export const Statuses = [
  { value: null, label: i18next.t('all') },
  { value: 1, label: i18next.t('free'), color: '#00897b' },
  { value: 2, label: i18next.t('busy'), color: '#e53935' },
  { value: 3, label: i18next.t('broken'), color: '#999999' }
];
