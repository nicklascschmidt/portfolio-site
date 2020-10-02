import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

// pages
import Main from './pages/main';
import Projects from './pages/projects';
import Resume from './pages/resume';
import NotFound from './pages/notFound';

// style
import './style/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />

            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
};

export default App;

