import React from 'react';
import { string, bool } from 'prop-types';

function Action({ description, notes, completed }) {
  return (
    <div>
      <p>{description}</p>
      <p>{notes}</p>
      <p>Status: {completed ? 'Completed' : 'Not completed'}</p>
    </div>
  );
}

Action.propTypes = {
  description: string.isRequired,
  notes: string.isRequired,
  completed: bool.isRequired,
};

export default Action;
