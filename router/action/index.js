const router = require('express').Router();

const handlers = require('./routeHandlers');
const validators = require('../../middleware/validateAction');

router.get('/', handlers.getActions);
router.get('/:id', validators.validateActionId, handlers.getActionById);
router.post('/', validators.validateCreateAction, handlers.createAction);
router.put(
  '/:id',
  validators.validateActionId,
  validators.validateUpdateAction,
  handlers.updateAction,
);
router.delete('/:id', validators.validateActionId, handlers.deleteAction);

module.exports = router;
