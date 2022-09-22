import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const KEY = 'hjxQ6YCbCAQ3WGt3964oIfoiospaOdoWOrunJ481';
const URL = 'https://api.nasa.gov/planetary/apod';

export const getLayoutImg = createApi({
  reducerPath: 'layoutImage',
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}?api_key=${KEY}` }),
  endpoints: builder => ({
    getImage: builder.query({
      query: () => ({}),
      transformResponse: response => response.hdurl,
    }),
  }),
});

export const { useGetImageQuery } = getLayoutImg;
