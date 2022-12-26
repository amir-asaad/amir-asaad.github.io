import React from 'react';
import './App.css';
import Greetings from './sections/Greetings/components/Greetings';
import Projects from './sections/Projects/components/Projects';

function App() {
  return (
    <div className="App">
      <Greetings />
      <Projects />
    </div>
  );
}

export default App;
