import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/profile">Profil</Link>
          </li>
          <li>
            <Link to="/setting">Réglage</Link>
          </li>
          <li>
            <Link to="/community">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return <footer className="footer">FOOTER</footer>;
}

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
