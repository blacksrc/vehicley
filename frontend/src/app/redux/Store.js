import { createStore } from 'redux';
import rootReducer from './Reducers';
import { loadState, saveState } from '../utils';

// Load state from local storage when initializing
const persistedState = loadState() || {};
const store = createStore(rootReducer, persistedState);

// Subscribe to store to sync app state with local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
