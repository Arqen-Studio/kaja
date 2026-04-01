import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./Footer";

function Main() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="flex-1 global-container">
        <Outlet />
      </main>
      <FooterSection/>
    </div>
  );
}

export default Main;
