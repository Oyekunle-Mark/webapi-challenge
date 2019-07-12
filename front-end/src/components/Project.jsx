import React, { useState, useEffect } from 'react';
import { number } from 'prop-types';
import axios from 'axios';

import Action from './Action';

const Project = ({ id }) => {
  const [project, updateProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then(res => updateProject(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <p>Status: {project.completed ? 'Completed' : 'Not completed'}</p>
      <div>
        {project.actions &&
          project.actions.map(action => <Action {...action} key={action.id} />)}
      </div>
    </div>
  );
};

Project.propTypes = {
  id: number.isRequired,
};

export default Project;
