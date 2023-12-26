import React from 'react';
import ApiList from './ApiList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React App</h1>
      </header>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <ApiList />
      </div>
    </div>
  );
}

export default App;
