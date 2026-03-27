import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="flex-1 global-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
