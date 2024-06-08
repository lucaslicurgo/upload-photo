import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/VerFotos.css';

function VerFotos() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    async function carregarFotos() {
      try {
        const response = await axios.get('http://localhost:3000/fotos');
        setFotos(response.data);
      } catch (error) {
        console.error('Erro ao carregar fotos:', error);
      }
    }

    carregarFotos();
  }, []);

  return (
    <div className='ver-fotos'>
      {fotos.map((foto) => (
        <img
          key={foto.id}
          src={`http://localhost:3000/${foto.fotos}`}
          alt={`Foto ${foto.id}`}
        />
      ))}
    </div>
  );
}

export default VerFotos;