import http from 'http';
import app from './app';

const server = http.createServer(app);

// Start the server
server.listen(ENV.PORT, () => {
  console.log(`Starting server at http//localhost:${ENV.PORT}/`);
});
