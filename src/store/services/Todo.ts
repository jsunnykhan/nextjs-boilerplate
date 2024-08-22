import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TodoApi = createApi({
  reducerPath: 'todo',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/todo' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<any, void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllTodosQuery } = TodoApi;
