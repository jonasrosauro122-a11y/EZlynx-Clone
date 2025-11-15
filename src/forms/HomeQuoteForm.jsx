// src/forms/HomeQuoteForm.jsx
import React, { useState } from 'react';

const HomeQuoteForm = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Home quote data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Home Insurance Quote</h3>
      <input
        type="text"
        placeholder="Property Address"
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <button type="submit">Get Quote</button>
    </form>
  );
};

export default HomeQuoteForm;

