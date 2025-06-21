import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './Components/CountryDetails';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://nationnode.vercel.app/')
      .then(response => {
        setCountries(response.data);
        const afghanistan = response.data.find(
          country => country.name.common === 'Afghanistan'
        );
        setSelectedCountry(afghanistan);
      })
      .catch(error => console.error('API error:', error));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Virtual Country Information</h1>

        <input
          style={styles.input}
          type="text"
          placeholder="Search country"
          onChange={(e) => {
            const name = e.target.value;
            const result = countries.find(c =>
              c.name?.common?.toLowerCase() === name.toLowerCase()
            );
            setSelectedCountry(result);
          }}
        />

        <select
          style={styles.select}
          onChange={(e) => {
            const region = e.target.value;
            const filtered = countries.filter(c => c.region === region);
            if (filtered.length) setSelectedCountry(filtered[0]);
          }}
        >
          <option value="">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
        </select>

        {selectedCountry ? (
          <CountryDetails country={selectedCountry} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    boxSizing: 'border-box',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  select: {
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default Home;
