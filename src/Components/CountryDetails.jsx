import React from 'react';
import Flag from './Flag';
import Borders from './Borders';

const CountryDetails = ({ country }) => {
  return (

    
    <div className="country-details">
      <h2>{country.name}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region} / {country.subregion}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Coordinates:</strong> {country.latlng.join(', ')}</p>
      <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
      <p><strong>Currencies:</strong> {country.currencies?.map(c => c.name).join(', ')}</p>
      <p><strong>Languages:</strong> {country.languages?.map(l => l.name).join(', ')}</p>
      
      <Flag url={country.flags?.png} alt={country.name} />
      <Borders borders={country.borders} />
    </div>
  );
};

export default CountryDetails;
