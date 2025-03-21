import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import ContextProvider from './Component/ContextProvider/ContextProvider.jsx';
import Orders from './Component/Orders/Orders.jsx';
import PrivateOrders from './Component/PrivateOrders/PrivateOrders.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "login",
        element:<Login></Login>,
      },
      {
        path: "register",
        element:<Register></Register>,
      },
      {
        path: "orders",
        element:<PrivateOrders><Orders></Orders></PrivateOrders>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextProvider>
     <RouterProvider router={router} />
   </ContextProvider>
  </StrictMode>,
)
