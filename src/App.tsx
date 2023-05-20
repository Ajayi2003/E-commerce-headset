import React from 'react'
import {RouterProvider} from "react-router-dom"
import { mainRoter } from './Component/mainRouter/mainRoter'

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoter}/>
      
    </div>
  )
}

export default App
