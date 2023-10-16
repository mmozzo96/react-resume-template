import React from 'react';

const B: React.FC<{children: string}> = React.memo(({children}) => {
  return <strong>{children}</strong>;
});
export default B;
