import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProfilePage from "./pages/profilePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
