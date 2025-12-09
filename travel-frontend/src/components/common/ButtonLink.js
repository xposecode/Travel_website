import React from 'react';

const ButtonLink = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        text-blue-600 hover:text-blue-800 
        hover:underline bg-transparent 
        border-none p-0 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonLink;