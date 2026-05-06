import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
  import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router';
import { router } from './Routing.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} ></RouterProvider>
    <ToastContainer />
  </StrictMode>,
)
