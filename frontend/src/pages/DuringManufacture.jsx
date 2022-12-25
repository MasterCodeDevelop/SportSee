import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clockSVG from '../assets/animation/clock.svg';

function DuringManufacture({ page, message }) {
  return (
    <main className="error-page">
      <h1>{page}</h1>
      <img src={clockSVG} alt="clock animation" />
      <p>{message} est en cours de construction !</p>
      <Link to="/profile">Aller sur la page de profil</Link>
    </main>
  );
}
DuringManufacture.propTypes = {
  page: PropTypes.string,
  message: PropTypes.string,
};

export default DuringManufacture;
