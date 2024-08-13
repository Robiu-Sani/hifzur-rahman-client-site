import { Outlet } from "react-router-dom";
import Footer from "../defaultComponent/Footer";
import NavBar from "../defaultComponent/NavBar";

export default function HomeRoot() {
  return (
    <div className="relative min-h-screen">
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </div>
  );
}
