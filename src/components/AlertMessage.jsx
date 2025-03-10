
import React from 'react';

const AlertMessage = ({ children, type = 'error' }) => {
  const bgColor = type === 'error' ? 'bg-red-600' : 'bg-green-600';

  return (
    <p className={`text-center my-4 ${bgColor} text-white font-bold uppercase text-sm p-3 rounded-lg`}>
      {children}
    </p>
  );
};

export default AlertMessage;