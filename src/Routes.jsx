import React from 'react'
import App from './ALLRouts/App';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import OrthoRoute from './ALLRouts/OrthoRoute';
import Botox from './ALLRouts/Botox';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
      path: "/Ortho",
      element: <OrthoRoute/>
    },
    {
      path: "/Botox",
      element: <Botox/>
    }
  ]);
  export default router