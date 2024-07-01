import React from 'react';

function Input({ value }) {
  return (
    <div id="display" className="mb-4">
      <input
        type="text"
        value={value}
        readOnly
        className="w-full p-2 text-2xl text-right bg-gray-100 border-none rounded-md focus:outline-none"
      />
    </div>
  );
}

export default Input;
