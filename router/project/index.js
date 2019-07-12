const router = require('express').Router();

const handlers = require('./routeHandlers');

router.get('/', handlers.getProjects);
router.get('/:id', handlers.getProjectById);
router.post('/', handlers.createProject);

module.exports = router;
