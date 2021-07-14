import React from 'react';

const CodeBlock = ({children, live}) => {
  console.log(live);
  return (
    <div>
      {children}
    </div>
  );

export default CodeBlock;