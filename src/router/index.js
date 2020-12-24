import { lazy } from 'react'

export const routes = () => {
  return [
    {
      name: 'Home',
      path: '/',
      exact: true,
      element: lazy(() => import(/* webpackChunkName: "home" */ '@p/Home')),
    },
    {
      name: 'Error',
      path: '*',
      element: lazy(() => import(/* webpackChunkName: "error" */ '@p/Error')),
    },
  ]
}
