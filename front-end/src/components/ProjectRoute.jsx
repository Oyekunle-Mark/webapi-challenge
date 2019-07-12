import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import projectContext from '../context';
import Project from './Project';

export default () => {
  const { projects } = useContext(projectContext);

  const projectList = projects.map(project => (
    <Route
      path={`/${project.id}`}
      key={project.id}
      render={props => (
        <Project {...props} id={project.id} />
      )}
    />
  ));

  return <>{projectList}</>;
};
