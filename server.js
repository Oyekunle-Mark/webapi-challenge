const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const server = express();

server.use(express.json());
server.use(cors());
server.use(logger('dev'));
server.use(helmet());
server.use(compression());

server.get('/', (req, res) =>
  res.status(200).json('Welcome to tha one and only server!!!'),
);

server.use((req, res) => res.status(404).json('That URL looks fishy mate!'));

module.exports = server;
