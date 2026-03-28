import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Home from "./pages/home/Home";
import MenuPage from "./pages/menu/MenuPage";
import MenuDetailPage from "./pages/menu/MenuDetails";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-steaks" element={<MenuDetailPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
