import http from 'http';
import app from './app.js';

const server = http.createServer(app);

// Start the server
server.listen(8000, () => {
  console.log(`Starting server at http//localhost:8000/`);
});
