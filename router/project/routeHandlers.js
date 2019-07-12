const Projects = require('../../data/helpers/projectModel');

function getProjects(req, res) {
  Projects.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
}

function getProjectById(req, res) {
  const { id } = req.params;

  Projects.get(id)
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
}

function createProject(req, res) {
  const { name, description, completed } = req.body;

  Projects.insert({ name, description, completed })
    .then(project => res.status(201).json(project))
    .catch(err => res.status(500).json(err));
}

function deleteProject(req, res) {
  const { id } = req.params;

  Projects.remove(id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err));
}

function updateProject(req, res) {
  const { id } = req.params;
  const { name, description, completed } = req.body;

  Projects.update(id, { name, description, completed })
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject,
};
