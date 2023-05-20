import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Layout from "../component/Block/Layout"
import Home from "../pages/Home"


export const mainRoter = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [{

      index: true,
      element: <Home/>
    }]
  }
])
