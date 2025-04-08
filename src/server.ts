import express from 'express';
import { router } from './routes/router';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => {console.log("Servidor Rodando Na Porta 3000")});