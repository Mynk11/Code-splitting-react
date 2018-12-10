import React, { Component } from 'react';

import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'Page3'
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  }
  render() {

    if (this.state.route === 'Page1') {
      console.log("Route is :", this.state.route);
      return <Page1 onRouteChange={this.onRouteChange} />
    }
    else if (this.state.route === 'Page2') {
      console.log("Route is :", this.state.route);
      return <Page2 onRouteChange={this.onRouteChange} />
    }
    else if (this.state.route === 'Page3') {
      console.log("Route is :", this.state.route);
      return <Page3 onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
