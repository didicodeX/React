import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ProfilePage from "../pages/Profile/ProfilePage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProfileOverview from "../pages/Profile/pages/profileOverview";
import ProfileData from "../pages/Profile/pages/ProfileData";
import homePageLoaders from "./homePageLoaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: homePageLoaders,
        element: <HomePage />,
      },
      {
        path: "/profile/:id",
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
