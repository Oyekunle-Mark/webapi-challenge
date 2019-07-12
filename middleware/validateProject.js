const Projects = require('../data/helpers/projectModel');

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!/^\d$/.test(id))
    return res.status(400).json({ message: 'ID must be an integer' });

  Projects.get(id)
    .then(project => {
      if (!project)
        return res.status(404).json({ message: 'No project matches that ID' });

      next();
    })
    .catch(err => res.status(500).json(err));
}

module.exports = {
  validateProjectId,
};
