import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="logo">Brew & Bean</h1>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a className="header__cta" href="/order">Order</a>
      </div>
    </header>
  );
}
