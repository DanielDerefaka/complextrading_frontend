import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [charges, setCharges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getCoinbaseCharges');
        setCharges(response.data);
      } catch (error) {
        console.error('Error fetching Coinbase charges:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Coinbase Charges</h1>
      <ul>
        {charges.map((charge) => (
          <li key={charge.id}>{charge.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
