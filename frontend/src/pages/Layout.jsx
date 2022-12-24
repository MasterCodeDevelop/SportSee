import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import iconMeditation from '../assets/icon/meditation.svg';
import iconSwimming from '../assets/icon/swimming.svg';
import iconCycling from '../assets/icon/cycling.svg';
import iconBodybuilding from '../assets/icon/bodybuilding.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        SportSee
      </div>
      <nav>
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
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <a href="#meditation">
              <img src={iconMeditation} alt="meditation" />
            </a>
          </li>
          <li>
            <a href="#swimming">
              <img src={iconSwimming} alt="swimming" />
            </a>
          </li>
          <li>
            <a href="#cycling">
              <img src={iconCycling} alt="cycling" />
            </a>
          </li>
          <li>
            <a href="#bodybuilding">
              <img src={iconBodybuilding} alt="bodybuilding" />
            </a>
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <div className="outlet">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
