import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/name/afghanistan')
      .then(response => {
        setCountries(response.data);
        const afghanistan = response.data.find(country => country.name === 'Afghanistan');
        setSelectedCountry(afghanistan);
      })
      .catch(error => console.error('API error:', error));
  }, []);

  return (
    <div>
      {selectedCountry ? <CountryDetails country={selectedCountry} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
