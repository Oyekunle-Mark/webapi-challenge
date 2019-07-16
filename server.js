const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const server = express();
const projectRouter = require('./router/project');
const actionRouter = require('./router/action');
const badUrl = require('./middleware/badUrl');

server.use(express.json());
server.use(cors());
server.use(logger('dev'));
server.use(helmet());
server.use(compression());

server.get('/', (req, res) =>
  res.status(200).json('Welcome to tha one and only server!!!'),
);

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);
server.use(badUrl);

module.exports = server;
