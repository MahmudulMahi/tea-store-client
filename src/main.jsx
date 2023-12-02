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
    loader:()=>fetch('http://localhost:5000/tea')
  },
  {
    path: "/addtea",
    element: <Addtea></Addtea>,
  },
  {
    path: "/updatetea/:id",
    element:<Updatetea></Updatetea>,
    loader:({params})=>fetch(`http://localhost:5000/tea/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
