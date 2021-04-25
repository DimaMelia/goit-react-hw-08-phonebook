import phonebookReducer from './phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
