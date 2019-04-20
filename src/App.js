import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, HomePlayground } from './Routes/Home';
import { JoinMe, JoinMePlayground } from './Routes/JoinMe';
import { Landing, LandingPlayground } from './Routes/Landing';
import Playground from './Routes/Playground';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/home/playground" exact component={HomePlayground} />
        <Route path="/join-me" exact component={JoinMe} />
        <Route path="/join-me/playground" exact component={JoinMePlayground} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/landing/playground" exact component={LandingPlayground} />
        <Route path="/playground" exact component={Playground} />
      </Router>
    );
  }
}

export default App;
