import { SET_FILTERS } from './types';

// eslint-disable-next-line import/prefer-default-export
// Disbale eslint in the case of adding more actions
export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});
