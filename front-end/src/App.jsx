import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProjectContext from './context';
import Projects from './components/ProjectLink';
import Project from './components/ProjectRoute';
import Header from './components/Header';

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
          <Header />
          <Route exact path="/" component={Projects} />
          <Project />
        </ProjectContext.Provider>
      </Router>
    );
  }
}

export default App;
