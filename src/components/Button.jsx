import React from 'react';

function Button({ label, handleClick }) {
  return (
    <button
      onClick={() => handleClick(label)}
      className="p-4 text-xl bg-gray-200 rounded-md hover:bg-gray-300"
    >
      {label}
    </button>
  );
}

export default Button;
