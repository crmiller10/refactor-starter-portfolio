import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/views/Home';
import Projects from './components/views/Projects';
import Resume from './components/views/Resume';
import Contact from './components/views/Contact';
import SingleProject from './components/views/SingleProject';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <Switch>
              <Route path="/projects/:id" component={SingleProject} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
