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

module.exports = {
  validateActionId,
};
