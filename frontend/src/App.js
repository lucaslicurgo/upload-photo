import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Upload from './Upload';
import VerFotos from './Ver_fotos';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className='app-principal'>
        <h1>Aplicação de Upload de Fotos</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Enviar Nova Foto</Link>
            </li>
            <li>
              <Link to="/fotos">Ver Fotos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/fotos" element={<VerFotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
