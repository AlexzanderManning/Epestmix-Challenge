import { configureStore } from '@reduxjs/toolkit';
import batchDashBoardReducer from '../features/BatchDashBoard/BatchDashBoardSlice';

export const store = configureStore({
  reducer: {
    batchDashBoard: batchDashBoardReducer,
  },
});
