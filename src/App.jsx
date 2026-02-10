import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Order from "./pages/CTA/Order/Order";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/order" element={<Order/>} />
    </Routes>
  );
}

export default App;
