import React, { useState, useEffect } from 'react';
import { number } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import Action from './Action';

const StyledProject = styled.section`
  background: #ffe9ce;
  box-shadow: 0px 0px 12px 0px rgba(255, 232, 204, 1);
  max-width: 500px;
  padding: 25px;
  margin: 0 auto;

  h4 {
    font-size: 20px;
    text-align: left;
    margin-bottom: 20px;
  }

  p {
    text-align: left;
  }

  h6 {
    margin: 5px 0;
    font-style: italic;
  }
`;

const StyledActionSection = styled.ul`
  h3 {
    font-family: monospace;
    font-size: 16px;
    font-weight: bold;
    margin-top: 25px;
    color: green;
  }
`;

const Project = ({ id }) => {
  const [project, updateProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then(res => updateProject(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <StyledProject>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <h6>Status: {project.completed ? 'Completed' : 'Not completed'}</h6>
      <StyledActionSection>
        <h3>Actions</h3>
        {project.actions &&
          project.actions.map(action => <Action {...action} key={action.id} />)}
      </StyledActionSection>
    </StyledProject>
  );
};

Project.propTypes = {
  id: number.isRequired,
};

export default Project;
