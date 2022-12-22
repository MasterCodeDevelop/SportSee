import React from 'react';
import { Link } from 'react-router-dom';

export default function DuringManufacture({ page, message }) {
  return (
    <main className="error-page">
      <h1>{page}</h1>
      <p>{message} est en cours de fabrication</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </main>
  );
}
