import { combineReducers } from 'redux';
import filtersReducer from './filters/reducers';

const rootReducer = combineReducers({
  filters: filtersReducer
});

export default rootReducer;
