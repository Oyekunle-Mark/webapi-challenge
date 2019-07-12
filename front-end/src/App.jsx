import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import ProjectContext from './context';
import Projects from './components/ProjectLink';
import Project from './components/ProjectRoute';
import Header from './components/Header';

const StyledApp = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => this.updateProjects(res.data));
  }

  updateProjects = projects =>
    this.setState({
      projects,
    });

  render() {
    return (
      <Router>
        <ProjectContext.Provider value={this.state}>
          <StyledApp>
            <Header />
            <Route exact path="/" component={Projects} />
            <Project />
          </StyledApp>
        </ProjectContext.Provider>
      </Router>
    );
  }
}

export default App;
