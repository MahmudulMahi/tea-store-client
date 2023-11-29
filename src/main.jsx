import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addtea from './components/Addtea/Addtea.jsx';

import Updatetea from './components/Updatetea/Updatetea.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addtea",
    element: <Addtea></Addtea>,
  },
  {
    path: "/updatetea",
    element:<Updatetea></Updatetea>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
