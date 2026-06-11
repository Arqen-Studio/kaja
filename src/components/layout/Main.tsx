import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./Footer";
import ReservationBanner from "./ReservationBanner";

function Main() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="global-container flex-1 pt-[92px] md:pt-[153px]">
        <Outlet />
      </main>
      <ReservationBanner />
      <FooterSection />
    </div>
  );
}

export default Main;
