import axios from 'axios';
import React, { useState } from 'react';
import './styles/Upload.css';

function Upload() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const enviarFoto = async () => {
    try {
      const formData = new FormData();
      formData.append('foto', fotoSelecionada);

      await axios.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Foto enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar foto:', error);
    }
  };

  const handleFileChange = (event) => {
    setFotoSelecionada(event.target.files[0]);
  };

  return (
    <div className='upload'>
      <h2>Enviar Nova Foto</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={enviarFoto}>Enviar Foto</button>
    </div>
  );
}

export default Upload;