const router = require('express').Router();

const handlers = require('./routeHandlers');

router.get('/', handlers.getProjects);
router.get('/:id', handlers.getProjectById);
router.post('/', handlers.createProject);
router.delete('/:id', handlers.deleteProject);
router.put('/:id', handlers.updateProject);

module.exports = router;
