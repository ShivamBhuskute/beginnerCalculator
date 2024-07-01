import React, { useState } from 'react';
import Input from './components/Input';
import Buttons from './components/Buttons';
// import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch {
        setDisplayValue('Error');
      }
    } else if (label === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue === '0' ? label : displayValue + label);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-10 bg-white rounded-lg shadow-md border border-black my-20">
      <Input value={displayValue} />
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
