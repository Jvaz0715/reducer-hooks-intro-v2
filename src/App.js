import React from 'react';
import Counter from './components/Counter/Counter';
import CountContextWrapper from './context/CountContext';

import "./App.css";

function App() {
  return (
    <div>
      <CountContextWrapper>
        <Counter />
      </CountContextWrapper>
    </div>
  )
}

export default App
