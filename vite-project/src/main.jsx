import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignUP from "./SignUP";
import Login from "./Login";
import UseContext from "./useContext";
import Slider from "./Slider";
import Carouselwin from "./Carouselwin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUP/>,
  },{
  path:"/component",
  element: <UseContext/>
  },{
    path:"/slider",
    element:<Slider/>
  },{
    path:"/carousel",
    element:<Carouselwin/>
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);