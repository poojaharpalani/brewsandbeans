import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="logo">Brew & Bean</h1>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to ="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/reservation">Reservation</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Link to="/order" className="header__cta">Order</Link>
      </div>
    </header>
  );
}
