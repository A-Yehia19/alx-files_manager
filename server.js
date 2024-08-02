import express from 'express';
import envLoader from './utils/env_loader';
import injectRoutes from './routes';

const server = express();

server.use(express.json({ limit: '200mb' }));

injectRoutes(server);

// start server
envLoader();
const port = process.env.PORT || 5000;
const env = process.env.npm_lifecycle_event || 'dev';
server.listen(port, () => {
  console.log(`[${env}] server has started listening at port:${port}`);
});

export default server;
