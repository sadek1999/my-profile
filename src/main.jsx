import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './Page/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto bg- max-w-7xl '>
    <RouterProvider router={router} />
    </div>
  
  </React.StrictMode>,
)
