import { combineReducers } from 'redux';
import filtersReducer from './filters/reducers';

// Combine reducers, Add new reducers here
const rootReducer = combineReducers({
  filters: filtersReducer
});

export default rootReducer;
