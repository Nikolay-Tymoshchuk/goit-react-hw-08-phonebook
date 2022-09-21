import axios from 'axios';

const KEY = 'hjxQ6YCbCAQ3WGt3964oIfoiospaOdoWOrunJ481';
axios.defaults.baseURL = 'https://api.nasa.gov/planetary/apod';

export const getLayoutImg = async () => {
  const request = await axios.get(`?api_key=${KEY}&`);
  return request.data;
};

// export const getLayoutImg = createApi({
//   reducerPath: 'layoutImage',
//   baseQuery: fetchBaseQuery({
//     // ==============================> Default URL
//     baseUrl: URL,
//   }),
//   endpoints: builder => ({
//     // ==============================> Get current user
//     getImage: builder.query({
//       query: () => ({ url: `?api_key=${KEY}` }),
//     }),
//     transformResponse: response => JSON.stringify(response),
//   }),
// });

// // export const { useGetImageQuery } = getLayoutImg;
