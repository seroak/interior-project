import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Interior from "../pages/Interior";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/interior",
    Component: Interior,
  },
]);
