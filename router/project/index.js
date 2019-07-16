const router = require('express').Router();

const handlers = require('./routeHandlers');
const validators = require('../../middleware/validateProject');

router.get('/', handlers.getProjects);
router.get('/:id', validators.validateProjectId, handlers.getProjectById);
router.post('/', validators.validateProjectDetails, handlers.createProject);
router.delete('/:id', validators.validateProjectId, handlers.deleteProject);
router.put(
  '/:id',
  validators.validateProjectId,
  validators.validateProjectDetails,
  handlers.updateProject,
);
router.get(
  '/:id/actions',
  validators.validateProjectId,
  handlers.getProjectActions,
);

module.exports = router;
