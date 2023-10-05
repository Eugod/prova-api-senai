/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Jogadores from './pages/Jogadores'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/jogadores/:id/:nomeTime", element: <Jogadores /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
