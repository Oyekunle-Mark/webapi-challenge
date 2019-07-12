import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';

const StyledAction = styled.li`
  margin: 10px 0;
  list-style-type: none;

  h5 {
    font-size: 12px;
    font-weight: bold;
  }

  h6 {
    margin: 5px 0;
    font-style: italic;
  }
`;

function Action({ description, notes, completed }) {
  return (
    <StyledAction>
      <h5>{description}</h5>
      <p>{notes}</p>
      <h6>Status: {completed ? 'Completed' : 'Not completed'}</h6>
    </StyledAction>
  );
}

Action.propTypes = {
  description: string.isRequired,
  notes: string.isRequired,
  completed: bool.isRequired,
};

export default Action;
