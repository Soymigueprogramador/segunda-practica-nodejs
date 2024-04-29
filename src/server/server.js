import express from 'express';
import path from 'path';

const startServer = (options) => {
    const { port, public_path = 'public' } = options;
    const app = express();

    app.use(express.static(public_path));

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname, '../../', public_path, 'index.html');
        res.sendFile(indexPath);
    });
};

export { startServer };