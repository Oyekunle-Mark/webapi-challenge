const Actions = require('../data/helpers/actionModel');

function validateActionId(req, res, next) {
  const { id } = req.params;

  if (!/^\d+$/.test(id))
    return res.status(400).json({ message: 'ID must be an integer' });

  Actions.get(id)
    .then(action => {
      if (action) return next();
    })
    .catch(() =>
      res.status(404).json({ message: 'No action matches that ID' }),
    );
}

function validateCreateAction(req, res, next) {
  const { project_id, description, notes, completed } = req.body;

  if (!notes || !description || !project_id)
    return res
      .status(400)
      .json({ message: 'Body must contain a notes, description and project_id fields' });

  if (typeof completed !== 'undefined') {
    if (typeof completed !== 'boolean')
      return res
        .status(400)
        .json({ message: 'Completed field must be a boolean value.' });
  }

  next();
}

function validateUpdateAction(req, res, next) {
  const { description, notes, completed } = req.body;

  if (!notes || !description)
    return res
      .status(400)
      .json({ message: 'Body must contain a notes and description fields' });

  if (typeof completed !== 'undefined') {
    if (typeof completed !== 'boolean')
      return res
        .status(400)
        .json({ message: 'Completed field must be a boolean value.' });
  }

  next();
}

module.exports = {
  validateActionId,
  validateCreateAction,
  validateUpdateAction,
};
