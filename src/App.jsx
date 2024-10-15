import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./components/layout/main-layout";
import { ProductCard } from "./components/card/product-card";
import { ProductDetails } from "./components/producDetails/produc-details";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<MainLayout />}>
     <Route index element={<Home />}/>
     <Route>
     <Route path="/" element={<ProductCard />} />
     <Route path="/product/:id" element={<ProductDetails />} />
     </Route>
    </Route>
  </Routes>
  </>;
}

export default App;
