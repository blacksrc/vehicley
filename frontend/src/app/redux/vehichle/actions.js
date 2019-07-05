import { SET_FILTERS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});
