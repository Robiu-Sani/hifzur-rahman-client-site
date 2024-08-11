import { Outlet } from "react-router-dom";
import Footer from "../defaultComponent/Footer";

export default function HomeRoot() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
