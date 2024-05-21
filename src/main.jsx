import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AboutMe from './components/AboutMe.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <div>404 Not Found</div>,
},
{
  path: '/aboutme',
  element: <AboutMe />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
