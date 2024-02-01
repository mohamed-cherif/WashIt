// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    // Change background color when the component mounts
    setBackgroundColor(getRandomColor());
  }, []);

  const handleColorChange = () => {
    // Change background color when the button is clicked
    setBackgroundColor(getRandomColor());
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
