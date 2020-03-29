import path from 'path';
import express from 'express';

const createExpressServer = () => {
  const server = express();

  // Serve static files
  server.use(express.static(path.join(__dirname, 'public')));

  // Set up the view engine
  server.set('views', path.join(__dirname, 'views'));
  server.set('view engine', 'pug');

  // Parse request bodies
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get('/', (req, res) => {
    res.render('index', { title: 'index' });
  });

  return server;
};

export default createExpressServer;
