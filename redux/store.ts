import { configureStore } from '@reduxjs/toolkit';
import toggle from './modules/themeReducer';

const store = configureStore({
  reducer: { toggle },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
