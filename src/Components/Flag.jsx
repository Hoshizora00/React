import React from 'react';

const Flag = ({ url, alt }) => (
  <div className="flag">
    <img src={url} alt={`Flag of ${alt}`} width="200" />
  </div>
);

export default Flag;
