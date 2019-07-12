const router = require('express').Router();

const handlers = require('./routeHandlers');
const validators = require('../../middleware/validateAction');

router.get('/', handlers.getActions);
router.get('/:id', validators.validateActionId, handlers.getActionById);
router.post('/', handlers.createAction);
router.put('/:id', validators.validateActionId, handlers.updateAction);
router.delete('/:id', validators.validateActionId, handlers.deleteAction);

module.exports = router;
