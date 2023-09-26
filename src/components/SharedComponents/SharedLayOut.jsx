import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const SharedLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayOut;