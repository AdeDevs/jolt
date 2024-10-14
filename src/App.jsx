import NavBar from "./pages/route";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import SiteFooter from "./pages/footer";
import ProductsScreen from "./pages/product";
import ScrollToTop from "./pages/scrolltotop";

function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductsScreen />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
