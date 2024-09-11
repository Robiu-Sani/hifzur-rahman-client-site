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
import LoginForm from "../LandingPages/authcation/LoginForm";
import SignupForm from "../LandingPages/authcation/SignupForm";
import ManageBooks from "../Deshboard/ManageBooks/ManageBooks";
import Private from "./Private";

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
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/signup",
        element: <SignupForm></SignupForm>,
      },
    ],
  },
  {
    path: "/",
    element: <DeshboardRoot></DeshboardRoot>,
    children: [
      {
        path: "/deshboard",
        element: (
          <Private>
            <DeshboardHome></DeshboardHome>
          </Private>
        ),
      },
      {
        path: "/manageblogs",
        element: (
          <Private>
            <ManageBlogs></ManageBlogs>
          </Private>
        ),
      },
      {
        path: "/manageimages",
        element: (
          <Private>
            <ManageImages></ManageImages>
          </Private>
        ),
      },
      {
        path: "/managevideos",
        element: (
          <Private>
            <ManageVideos></ManageVideos>
          </Private>
        ),
      },
      {
        path: "/manageprogrammes",
        element: (
          <Private>
            <ManageProgrammes></ManageProgrammes>
          </Private>
        ),
      },
      {
        path: "/managenews",
        element: (
          <Private>
            <ManageNews></ManageNews>
          </Private>
        ),
      },
      {
        path: "/managequote",
        element: (
          <Private>
            <ManageQuote></ManageQuote>
          </Private>
        ),
      },
      {
        path: "/managecontact",
        element: (
          <Private>
            <ManageContact></ManageContact>
          </Private>
        ),
      },
      {
        path: "/managebooks",
        element: (
          <Private>
            <ManageBooks></ManageBooks>
          </Private>
        ),
      },
    ],
  },
  {
    path: "/test",
    element: <Deshboard></Deshboard>,
  },
]);
