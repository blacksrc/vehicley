import { SET_FILTERS } from './types';

const initialState = [];

const vehichleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return action.payload;

    default:
      return state;
  }
};

export default vehichleReducer;
