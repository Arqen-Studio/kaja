import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import MenuPage from "./pages/menu/MenuPage";
import MenuDetailPage from "./pages/menu/MenuDetails";
import About from "./pages/about/About";
import ReservationPage from "./pages/reservation/ReservationPage";
import Stories from "./pages/stories-page/Stories";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-steaks" element={<MenuDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/stories" element={<Stories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
