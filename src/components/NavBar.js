import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProjectCard from './ProjectCard'
import AboutMe from './AboutMe'
import Contact from './Contact';
class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg nav-bar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand order-md-last" href="https://github.com/jessica-cheng">
            <img src="/github-logo.svg" width="40" height="40" class="rounded-circle mx-auto d-block" alt="github" />
          </a>
          <a class="navbar-brand" href="https://www.linkedin.com/in/jessica-cheng-b730ba15a">
            <img src="/linked-in-icon.png" width="40" height="40" class="rounded-circle mx-auto d-block" alt="linkedin" />
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" style={{ fontFamily: 'Courier' }}>
              <li class="nav-item">
                <Link to="/" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/projects" class="nav-link">Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">Contact</Link>
              </li>
            </ul>

          </div>
        </nav>

        <div className="profile-align">
          <img src="/me.jpg" class="rounded-circle mx-auto d-block" width="200px" alt="me" />

          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path='/projects' component={ProjectCard} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;