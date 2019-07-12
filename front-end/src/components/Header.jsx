import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
background: #100e17;
  color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;

  div {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: end;

    max-width: 700px;
    margin: 0 auto;

    h1 {
      font-size: 24px;
      color: #f89326;
    }

    a {
      text-decoration: none;
      color: #ffe9ce;
    }
  }
`;

export default () => (
  <StyledHeader>
    <div>
      <h1>Project Manager</h1>
      <Link to="/">Home</Link>
    </div>
  </StyledHeader>
);
