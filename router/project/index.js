const router = require('express').Router();

const handlers = require('./routeHandlers');

router.get('/', handlers.getProjects);

module.exports = router;
