import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";

const RouterLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ContactSection />
    </div>
  );
};

export default RouterLayout;
