import axiosBaseQuery from '@/lib/HttpClient';
import { createApi } from '@reduxjs/toolkit/query';

const API_BASE_URL = process.env.API_BASE_URL;
const API_TAG_TYPE: string[] = [];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 120,
  tagTypes: API_TAG_TYPE,
  endpoints: () => ({}),
});
