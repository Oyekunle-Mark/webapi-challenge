import React, { Component } from 'react';
import axios from 'axios';

import ProjectContext from './context';

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => this.updateProjects(res));
  }

  updateProjects = projects =>
    this.setState({
      projects,
    });

  render() {
    return (
      <ProjectContext.Provider value={this.state}>
        <h1>Project Manager</h1>
      </ProjectContext.Provider>
    );
  }
}

export default App;
