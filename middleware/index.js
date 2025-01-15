const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const globalMiddelwares = (app, dir) => {
  app.use('/public', express.static(path.join(dir, 'public')));
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/api/users', require('../modules/users'))
  app.use('/api/catalog_products', require('../modules/catalog_products'))
  app.use('/api/access_tokens', require('../modules/access_tokens'))
}

module.exports = globalMiddelwares;