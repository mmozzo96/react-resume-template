import React from 'react';

const B: React.FC<{children: string}> = ({children}) => {
  return <strong>{children}</strong>;
};
export default B;
