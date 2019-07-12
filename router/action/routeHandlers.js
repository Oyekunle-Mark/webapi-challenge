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

function createAction(req, res) {
  const { project_id, description, notes, completed } = req.body;

  Actions.insert({ project_id, description, notes, completed })
    .then(action => res.status(201).json(action))
    .catch(err => res.status(500).json(err));
}

function updateAction(req, res) {
  const { id } = req.params;
  const { description, notes, completed } = req.body;

  Actions.update(id, { description, notes, completed })
    .then(action => res.status(201).json(action))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  getActions,
  getActionById,
  createAction,
  updateAction,
};
