import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Interior from "../pages/Interior";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import AuthCallback from "../pages/AuthCallback";
import RootLayout from "./RootLayout";
import { authLoader } from "./authLoader";
import { publicLoader } from "./publicLoader";
import SharePage from "../pages/SharePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/interior",
        Component: Interior,
        loader: authLoader,
      },
      {
        path: "/login",
        Component: Login,
        loader: publicLoader,
      },
      {
        path: "/signup",
        Component: SignUp,
        loader: publicLoader,
      },
      {
        path: "/reset-password",
        Component: ResetPassword,
      },
      {
        path: "/auth/callback",
        Component: AuthCallback,
      },
      {
        path: "/share/:id",
        Component: SharePage,
      },
    ],
  },
]);
