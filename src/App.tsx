import React from 'react';
import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Character from './routes/Character';
import CharacterList from './routes/CharacterList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Character />} />
      <Route path="character" element={<Character />} />
      <Route path="characterList" element={<CharacterList />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
