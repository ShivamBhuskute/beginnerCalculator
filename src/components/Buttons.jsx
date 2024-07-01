import React from 'react';
import Button from './Button';

function Buttons({ handleButtonClick }) {
  const buttonLabels = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+', '=',
    'C'
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttonLabels.map(label => (
        <Button key={label} label={label} handleClick={handleButtonClick} />
      ))}
    </div>
  );
}

export default Buttons;
 