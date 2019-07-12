const router = require('express').Router();

const handlers = require('./routeHandlers');

router.get('/', handlers.getActions);
router.get('/:id', handlers.getActionById);

module.exports = router;
