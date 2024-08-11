import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../LandingPages/HomeRoot";
import Error from "./Error";
import Home from "../LandingPages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
