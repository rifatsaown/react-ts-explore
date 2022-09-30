import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <h5>New Component</h5>
      <Friend />
      <Friend />
    </div>
  );
}
function Person() {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1>
      <p>Hero of the match</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="friend">
      <h1>Ajay Al Marsh</h1>
      <p>Own a Gun</p>
    </div>
  )
}

export default App;
