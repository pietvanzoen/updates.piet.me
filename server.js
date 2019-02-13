const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const fs = require('fs');

app.prepare().then(() => {
  const server = express();

  server.get('/a', (req, res) => app.render(req, res, '/b', req.query));

  server.get('/b', (req, res) => app.render(req, res, '/a', req.query));

  server.get('/posts/:id', (req, res) => app.render(req, res, '/posts', { id: req.params.id }));

  server.get('/api/updates', (req, res) => {
    fs.readFile('./updates/updates.json', (err, updates) => {
      if (err) return res.status(500).send({ error: 'error reading updates' });
      return res.send(updates);
    });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
