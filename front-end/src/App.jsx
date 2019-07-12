import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import ProjectContext from './context';
import Projects from './components/Projects';

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
          <h1>Project Manager</h1>
          <Projects />
        </ProjectContext.Provider>
      </Router>
    );
  }
}

export default App;
