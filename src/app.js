import { envs } from './config/config.js';
import { startServer } from './server/server.js';
import express from 'express';

const port = envs.PORT || 8080;
const app = express();

const main = async () => {
    await startServer({
        port: envs.PORT || 8080,
        public_path: envs.PUBLIC_PATH,
    });
}

const server = app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});