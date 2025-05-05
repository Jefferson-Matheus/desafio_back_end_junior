import express from 'express';
import {router} from '../src/routes/router';
import path from 'path';

import swaggerFile from '../documentation/swagger.json';

import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

app.use(router);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {console.log("Servidor Rodando Na Porta 3000")});