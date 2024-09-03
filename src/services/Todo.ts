import axiosBaseQuery from '@/lib/HttpClient';
import { createApi } from '@reduxjs/toolkit/query/react';

export const TodoApi = createApi({
  reducerPath: 'todo',
  baseQuery: axiosBaseQuery({ baseUrl: '/health' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<any, void>({
      query: () => ({
        url: '/',
        method: 'GET',
        useAuth: false,
      }),
    }),
  }),
});

export const { useGetAllTodosQuery } = TodoApi;
