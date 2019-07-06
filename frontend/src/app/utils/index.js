import { Statuses } from '../config';

/**
 * Load state from local storage
 *
 * @return object
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

/**
 * Save state to local storage
 *
 * @param object state
 */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('Can not save state into local storage.');
  }
};

/**
 * Clears local storage
 */
export const clearState = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log('Can not clear state from local storage.');
  }
};

/**
 * Return status
 *
 * @param int status
 * @return object
 */
export const getVehiclesStatus = status => {
  return Statuses.filter(defaultStatus => defaultStatus.value === status)[0];
};
