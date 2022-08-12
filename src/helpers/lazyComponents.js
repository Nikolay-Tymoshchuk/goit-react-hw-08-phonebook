import { lazy } from 'react';

export const Home = lazy(
  () => import('../pages/home') /* webpackChunkName: "home" */
);
export const Movies = lazy(
  () => import('../pages/movies') /* webpackChunkName: "movies" */
);
export const MovieDetails = lazy(
  () =>
    import(
      '../components/movie-details'
    ) /* webpackChunkName: "movie-details" */
);
export const Cast = lazy(
  () => import('../components/cast') /* webpackChunkName: "cast" */
);
export const Reviews = lazy(
  () => import('../components/reviews') /* webpackChunkName: "reviews" */
);
export const ErrorPlug = lazy(
  () => import('../components/error-plug') /* webpackChunkName: "404page" */
);
