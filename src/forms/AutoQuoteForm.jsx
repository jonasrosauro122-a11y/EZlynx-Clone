import React, { useState } from 'react';

function AutoQuoteForm() {
  const [carMake, setCarMake] = useState('');
  const [carYear, setCarYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Auto Quote Submitted for ${carMake} (${carYear})`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Car Make:</label>
        <input type="text" value={carMake} onChange={(e) => setCarMake(e.target.value)} required />
      </div>
      <div>
        <label>Car Year:</label>
        <input type="number" value={carYear} onChange={(e) => setCarYear(e.target.value)} required />
      </div>
      <button type="submit">Get Quote</button>
    </form>
  );
}

export default AutoQuoteForm;
