import { apiSlice } from '@/lib/store/slices/apiSlice';

const healthService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHealthReport: builder.query<any, void>({
      query: () => ({
        url: '/health',
        method: 'GET',
        useAuth: true,
      }),
    }),
  }),
});

export const { useGetHealthReportQuery } = healthService;
