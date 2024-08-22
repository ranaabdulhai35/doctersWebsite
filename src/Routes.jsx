import React from 'react'
import App from './ALLRouts/App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import OrthoRoute from './ALLRouts/OrthoRoute';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
      path: "/Ortho",
      element: <OrthoRoute/>
    }
  ]);
  export default router