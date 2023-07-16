import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
