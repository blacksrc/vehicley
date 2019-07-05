import { createStore } from 'redux';
import rootReducer from './Reducers';
import { loadState, saveState } from '../utils';

const persistedState = loadState() || {};
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
