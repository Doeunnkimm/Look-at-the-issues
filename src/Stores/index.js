import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV === 'development',
  middleware: (defaultMiddleware) => {
    if (process.env.NODE_ENV === 'development') {
      return [...defaultMiddleware(), logger];
    }
    return defaultMiddleware();
  },
});
