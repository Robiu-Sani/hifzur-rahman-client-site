import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../LandingPages/HomeRoot";
import Error from "./Error";
import LandingHome from "../LandingPages/LandingHome/LandingHome";
import About from "../LandingPages/About/About";
import Blog from "../LandingPages/Blog/Blog";
import Contact from "../LandingPages/Contact/Contact";
import Videos from "../LandingPages/Videos/Videos";
import Books from "../LandingPages/Books/Books";
import Programmes from "../LandingPages/Programmes/Programmes";
import News from "../LandingPages/News/News";
import Quote from "../LandingPages/Quote/Quote";
import Images from "../LandingPages/Images/Images";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/videos",
        element: <Videos></Videos>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/programmes",
        element: <Programmes></Programmes>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/quote",
        element: <Quote></Quote>,
      },
      {
        path: "/images",
        element: <Images></Images>,
      },
    ],
  },
]);
