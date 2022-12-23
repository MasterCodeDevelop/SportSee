import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function Score({ score }) {
  const data = [
    { value: 1, fill: '#fff', cornerRadius: 0 },
    { value: score, fill: '#FF0101', cornerRadius: 50 },
  ];

  return (
    <section className="score">
      <h2>Score</h2>
      <div className="score-info">
        <strong>{score * 100}%</strong>
        <p>
          de votre
          <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius={70} data={data} outerRadius="100%">
          <RadialBar dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
}

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
