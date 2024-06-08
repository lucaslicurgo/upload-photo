import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rotas from './routes/rotas';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(rotas);

app.listen(3000);

