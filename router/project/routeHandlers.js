const Projects = require('../../data/helpers/projectModel');

function getProjects(req, res) {
  Projects.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  getProjects,
};
