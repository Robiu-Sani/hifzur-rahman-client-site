import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../LandingPages/HomeRoot";
import Error from "./Error";
import Home from "../LandingPages/Home/Home";
import LandingHome from "../LandingPages/LandingHome/LandingHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <LandingHome></LandingHome>,
      },
      {
        path: "/test",
        element: <Home></Home>,
      },
    ],
  },
]);
