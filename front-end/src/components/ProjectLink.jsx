import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import projectContext from '../context';

export default () => {
  const { projects } = useContext(projectContext);

  const projectList = projects.map(project => (
    <Link to={`/${project.id}`} key={project.id}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </Link>
  ));

  return <div>{projectList}</div>;
};
