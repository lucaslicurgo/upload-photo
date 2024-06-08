import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { knex } from '../db/conexao';

const rotas = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

rotas.get('/fotos', async(req, res) => {
  try {
      const fotos = await knex.select("*").from("fotos");
      return res.json(fotos);

  } catch (error) {

    return res.status(500).json({erro: 'Erro interno do servidor.'});

  }
});

rotas.post('/', upload.single('foto'), async(req, res) => {
  try {
    if(!req.file){
      return res.status(400).json({mensagem: 'Nenhuma foto enviada.'});
    }

    const fotoPath = req.file.path;
    await knex('fotos').insert({fotos: fotoPath});
    
    res.json({mensagem: 'Foto recebida e salva com sucesso.'})
  } catch (error) {
    console.log(error);
     return res.json({erro: 'Erro interno do servidor.'})
  }
});

export default rotas;