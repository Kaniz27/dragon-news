import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Layouts/Components/HomeLayout/Page/Home";
import CategoryNews from "../Layouts/Components/HomeLayout/Page/CategoryNews";
import Login from "../Layouts/Components/HomeLayout/Page/Login";
import Register from "../Layouts/Components/HomeLayout/Page/Register";
import AuthLayout from "../Layouts/Components/HomeLayout/Page/AuthLayout";
import NewsDetails from "../Layouts/Components/HomeLayout/Page/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Provider/Loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
         hydrateFallbackElement:<Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails />,
    </PrivateRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement:<Loading></Loading>,
  },
  {
    path: "/*",
    element: <h1>Error 404 layout</h1>,
  },
]);
export default router;
