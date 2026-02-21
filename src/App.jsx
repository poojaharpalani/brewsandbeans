import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Order from "./pages/CTA/Order/Order";
import "./App.css";
import Reservation from "./pages/CTA/Reservation";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Admin from "./pages/Admin/Dashboard";
import Profile from "./pages/common/Profile";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/order" element={<Order/>} />
         <Route path="/reservation" element={<Reservation/>} />
         <Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <Admin />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute role="user">
      <Profile />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;
