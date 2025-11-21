import React from 'react'
import { createBrowserRouter } from 'react-router';

import Home from '../Home';
import Layout from '../Layout/Layout';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {

      index: true,
      element: <Home/>


      }
    ]
  },
]);

export default router