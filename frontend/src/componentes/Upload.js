import axios from 'axios';
import React, { useState } from 'react';
import '../styles/Upload.css';

function Upload() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const[mensagem, setMensagem] = useState('');

  const enviarFoto = async () => {
    try {
      const formData = new FormData();
      formData.append('foto', fotoSelecionada);

      await axios.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMensagem('Foto enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar foto:', error);
      setMensagem('Erro ao enviar a foto. Tente novamente.')
    }
  };

  const handleFileChange = (event) => {
    setFotoSelecionada(event.target.files[0]);
    setMensagem('');
  };

  return (
    <div className='upload'>
      <h2>Enviar Nova Foto</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={enviarFoto}>Enviar Foto</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Upload;