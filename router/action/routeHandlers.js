const Actions = require('../../data/helpers/actionModel');

function getActions(req, res) {
  Actions.get()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
}

function getActionById(req, res) {
  const { id } = req.params;

  Actions.get(id)
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  getActions,
  getActionById,
};
