import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./components/layout/main-layout";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<MainLayout />}>
     <Route index element={<Home />}/>
    </Route>
  </Routes>
  </>;
}

export default App;
