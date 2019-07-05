import { combineReducers } from 'redux';
import vehichleReducer from './vehichle/reducers';

const rootReducer = combineReducers({
  vehichle: vehichleReducer
});

export default rootReducer;
