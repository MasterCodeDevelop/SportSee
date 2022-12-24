import React from 'react';
import PropTypes from 'prop-types';
function Card({ data }) {
  return (
    <div className="card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        {data.icon}
      </svg>
      <div>
        <h3>{data.value + data.unit}</h3>
        <p>{data.name}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
