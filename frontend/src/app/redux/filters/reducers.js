import { SET_FILTERS } from './types';

const initialState = [];

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return action.payload;

    default:
      return state;
  }
};

export default filtersReducer;
