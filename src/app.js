const { envs } = require('./config/config.js')
const { startServer } = require('./server/server.js')
const express = require('express')
const port = envs.PORT || 8080

const app = express()



const main = () => {
    startServer({
        port: envs.PORT || 8080 ,
        public_path: envs.PUBLIC_PATH,
    })
}

const server = app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});