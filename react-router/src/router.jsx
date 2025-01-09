import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProfilePage from "./pages/Profile/ProfilePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProfileOverview from "./pages/Profile/pages/profileOverview";
import ProfileData from "./pages/Profile/pages/ProfileData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: "data",
            element: <ProfileData />,
          },
        ],
      },
    ],
  },
]);
