import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './page/Home.jsx'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={appRouter}  />
)
