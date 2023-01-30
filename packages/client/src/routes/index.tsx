import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Home />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);