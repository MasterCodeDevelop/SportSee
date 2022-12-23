import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DuringManufacture({ page, message }) {
  return (
    <main className="error-page">
      <h1>{page}</h1>
      <p>{message} est en cours de fabrication</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </main>
  );
}
DuringManufacture.propTypes = {
  page: PropTypes.string,
  message: PropTypes.string,
};

export default DuringManufacture;
