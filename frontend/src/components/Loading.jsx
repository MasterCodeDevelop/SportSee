import React from 'react';
import loadingSVG from '../assets/animation/loading.svg';

export default function Loading() {
  return (
    <div className="loading">
      <img src={loadingSVG} alt="loading" />
    </div>
  );
}
