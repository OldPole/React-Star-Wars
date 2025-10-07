import { createStore, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { setLocalStorage } from '../utils/localStorage';

const store = configureStore({
  reducer: rootReducer
});

store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer);
})

// const store = createStore(rootReducer);

export default store;