import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { AppPage } from "./pages/AppPage";
import { MenuPage } from './pages/MenuPage';
import { disalbeZoom } from './utils/FuncUtils';

function App() {
  disalbeZoom();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path=":sample" element={<AppPage />} />
      </Routes>
    </div>
  );
}

export default App;
