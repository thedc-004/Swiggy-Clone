import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantPage from "./src/pages/RestaurantPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // children:
  },

  {
    path: "/restaurants/:restId",
    element: <RestaurantPage />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
