import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./Pages/Home.jsx";
import WorkTogether from "./Pages/WorkTogether.jsx";
import NewsAndArticles from "./Pages/NewsAndArticles.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/work-together",
        element: <WorkTogether />,
      },
      {
        path: "/news-and-articles",
        element: <NewsAndArticles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
