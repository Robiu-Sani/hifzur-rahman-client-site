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
import DeshboardRoot from "../Deshboard/DeshboardRoot";
import DeshboardHome from "../Deshboard/DeshboardHome/DeshboardHome";

//extra
import Deshboard from "../test/Deshboard";
import ManageBlogs from "../Deshboard/ManageBlogs/ManageBlogs";
import ManageImages from "../Deshboard/ManageImages/ManageImages";
import ManageVideos from "../Deshboard/ManageVideos/ManageVideos";
import ManageProgrammes from "../Deshboard/ManageProgrammes/ManageProgrammes";
import ManageNews from "../Deshboard/ManageNews/ManageNews";
import ManageQuote from "../Deshboard/ManageQuote/ManageQuote";
import ManageContact from "../Deshboard/ManageContact/ManageContact";

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
  {
    path: "/",
    element: <DeshboardRoot></DeshboardRoot>,
    children: [
      {
        path: "/deshboard",
        element: <DeshboardHome></DeshboardHome>,
      },
      {
        path: "/manageblogs",
        element: <ManageBlogs></ManageBlogs>,
      },
      {
        path: "/manageimages",
        element: <ManageImages></ManageImages>,
      },
      {
        path: "/managevideos",
        element: <ManageVideos></ManageVideos>,
      },
      {
        path: "/manageprogrammes",
        element: <ManageProgrammes></ManageProgrammes>,
      },
      {
        path: "/managenews",
        element: <ManageNews></ManageNews>,
      },
      {
        path: "/managequote",
        element: <ManageQuote></ManageQuote>,
      },
      {
        path: "/managecontact",
        element: <ManageContact></ManageContact>,
      },
    ],
  },
  {
    path: "/test",
    element: <Deshboard></Deshboard>,
  },
]);
