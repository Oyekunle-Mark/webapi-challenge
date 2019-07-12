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

function validateProjectDetails(req, res, next) {
  const { name, description, completed } = req.body;

  if (!name || !description)
    return res
      .status(400)
      .json({ message: 'Body must contain a name and description field' });

  if (typeof completed !== 'undefined') {
    if (typeof completed !== 'boolean')
      return res
        .status(400)
        .json({ message: 'Completed field must be a boolean value.' });
  }

  next();
}

module.exports = {
  validateProjectId,
  validateProjectDetails,
};
