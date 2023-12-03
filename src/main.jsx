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
import SignUp from './components/SignUp/SignUp.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './Users/Users.jsx';

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
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  
  {
    path:'/signin',
    element:<LogIn></LogIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/user')
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
