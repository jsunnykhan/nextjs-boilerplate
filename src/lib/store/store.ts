import { TodoApi } from '@/services/Todo';
import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [TodoApi.reducerPath]: TodoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodoApi.middleware),
});

setupListeners(store.dispatch);
