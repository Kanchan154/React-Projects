import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SignUP from './SignUP'
import Login from './Login';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Nevbar from './Nevbar';




const App = () => {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<><Header/><Login/></>
    },{
      path:"/Nevbar",
      element:<><Header/><Nevbar/></>
    }
  ])
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App