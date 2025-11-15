import React, { useState } from 'react';

function HomeQuoteForm() {
  const [address, setAddress] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Home Quote Submitted for ${address} worth $${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>Home Value:</label>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} required />
      </div>
      <button type="submit">Get Quote</button>
    </form>
  );
}

export default HomeQuoteForm;
