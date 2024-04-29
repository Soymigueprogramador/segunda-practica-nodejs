const express = require('express');
const path = require('path');

const startServer = (options) => {
    const { port, public_path = 'public' } = options;
    const app = express();

    app.use(express.static(public_path));

    app.get('*', (req, res) => {
        const indexPath = path.join(public_path, + '../../${public_path}/index.html'); 
        res.sendFile(indexPath);
    });
};

module.exports = {
    startServer
};