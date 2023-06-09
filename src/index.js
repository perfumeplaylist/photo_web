import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Picture from "./pages/Picture";
import Camera from "./pages/Camera";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Choose from "./pages/Choose";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/picture", element: <Picture /> },
      { path: "/picture/start", element: <Camera /> },
      { path: "/picture/end", element: <Choose /> },
      // { path: "/picture/save", element: <Choose /> },
    ],
  },
  // { path: "/picture", element: <Picture />, errorElement: <Error /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
