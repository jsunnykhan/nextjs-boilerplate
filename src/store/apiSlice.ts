import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_BASE_URL = process.env.API_BASE_URL;
const API_TAG_TYPE: string[] = [];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }), // it will be replace by axios interceptor
  keepUnusedDataFor: 120,
  tagTypes: API_TAG_TYPE,
  endpoints: () => ({}),
});
