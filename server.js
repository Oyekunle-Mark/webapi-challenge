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

module.exports = server;
