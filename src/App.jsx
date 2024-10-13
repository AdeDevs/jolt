import NavBar from "./pages/route";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import SiteFooter from "./pages/footer";
import ProductsScreen from "./pages/product";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductsScreen />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
