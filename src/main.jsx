import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
  import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router';
import { router } from './Routing.jsx';
import ContextProvider from './Contex/ContextProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContextProvider>
          <RouterProvider router={router} ></RouterProvider>
    <ToastContainer />
     </ContextProvider>
  </StrictMode>,
)
