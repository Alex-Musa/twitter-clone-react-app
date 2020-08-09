import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'

function App() {
  return (
    <div className="app">

      <h1>wellcome</h1>
      {/* Sidebar File */}
      <Sidebar />
      {/* Feed File */}
      <Feed />

      {/* Widgets file*/}

    </div>
  );
}

export default App;
