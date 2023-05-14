import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../reducers';

const store = configureStore({
  reducer: {
    appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
