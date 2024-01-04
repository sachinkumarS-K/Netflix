import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './page/Home.jsx'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store.js'
import Browse from './page/Browse.jsx'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path= "/browse" element = {<Browse />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
