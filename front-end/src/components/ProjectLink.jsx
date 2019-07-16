import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import projectContext from '../context';

const StyledProjectLink = styled.article`
  background: #ffe9ce;
  box-shadow: 0px 0px 12px 0px rgba(255, 232, 204, 1);
  max-width: 500px;
  padding: 20px;
  margin: 20px 0;

  h4 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
  }

  p {
    text-align: center;
  }
`;

const StyledSection = styled.section`
  display: grid;
  justify-content: center;
`;

export default () => {
  const { projects } = useContext(projectContext);

  const projectList = projects.map(project => (
    <Link to={`/${project.id}`} key={project.id}>
      <StyledProjectLink>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </StyledProjectLink>
    </Link>
  ));

  return <StyledSection>{projectList}</StyledSection>;
};
