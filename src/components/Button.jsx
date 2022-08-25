import React from 'react';

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`p-2 hover:drop-shadow-xl mt-5 text-${size}`}
    >
      {text}
    </button>
  );
};

export default Button;
