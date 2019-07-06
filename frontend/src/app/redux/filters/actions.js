import { SET_FILTERS } from './types';

// Disbale eslint in the case of adding more actions
// eslint-disable-next-line import/prefer-default-export
export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});
