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
    }
  //  else if (label==='backspace') {
  //   // Handle backspace
  //   setDisplayValue(displayValue.slice(0, -1));
  // } 
    else {
      setDisplayValue(displayValue === '0' ? label : displayValue + label);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto my-20 bg-white rounded-lg shadow-md border border-black">
      <Input value={displayValue} />
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
