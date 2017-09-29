import React, { Component } from 'react';
import data from '../../data/data'
import Project from '../Project';

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: data
    }
  }

  render(){

    const projects = this.state.projects.map((project) =>
      <Project key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} github={project.github} />);
    console.log(projects);

    return(
      <div>
        <h1>Projects</h1>
        <div className="row">
          {projects}
        </div>
      </div>
    );
  }
}

export default Projects;
