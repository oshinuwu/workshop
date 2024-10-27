import React from 'react';

function Button() {
 
  const handleClick  = () => {
    const paragraph = document.querySelector('.para');
    paragraph.textContent = 'New paragraph text!'; 
  };

  return (
    <div>
      <button id="button-1" onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Button;