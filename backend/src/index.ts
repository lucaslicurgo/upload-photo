import cors from 'cors';
import express from 'express';
import rotas from './routes/rotas';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(rotas);

app.listen(3000, () => {
    console.log('Servidor aberto na porta 3000');
});

