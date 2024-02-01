// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('green');

  useEffect(() => {
    // Change background color when the component mounts
    toggleColor();
  }, []);

  const toggleColor = () => {
    setBackgroundColor((prevColor) => (prevColor === 'green' ? 'red' : 'green'));
  };

  const handleColorChange = () => {
    // Change background color when the button is clicked
    toggleColor();
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <h1>Color Changing Website</h1>
        <button onClick={handleColorChange}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
