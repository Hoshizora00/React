import React from 'react';

const Borders = ({ borders }) => (
  <div>
    <strong>Borders:</strong>
    <ul>
      {borders && borders.length > 0 ? (
        borders.map((border, index) => <li key={index}>{border}</li>)
      ) : (
        <li>None</li>
      )}
    </ul>
  </div>
);

export default Borders;
