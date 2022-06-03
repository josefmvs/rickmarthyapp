import React from 'react';
import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CharacterPage from './routes/CharacterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterPage />} />
      <Route path="character" element={<CharacterPage />} />
    </Routes>

  );
}

export default App;
