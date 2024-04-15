import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    <ToastContainer />
  </React.StrictMode>,
)
