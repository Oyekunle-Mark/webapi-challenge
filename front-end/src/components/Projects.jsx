import React, { useContext } from 'react';
import projectContext from '../context';

export default () => {
  const { projects } = useContext(projectContext);

  const projectList = projects.map(project => (
    <div key={project.id}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </div>
  ));

  return <div>{projectList}</div>;
};
