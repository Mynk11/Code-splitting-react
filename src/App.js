import React, {
  Component
} from 'react';
import AsyncComponent from './components/AsyncComponent';
import Page1 from './components/page1';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'Page1',
      component: null
    }


  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    });

    /* 
    if (route === 'Page1') {
      console.log("PAGE1::", this.state.component);
      this.setState({
        route: route
      });
    } else if (route === 'Page2') {

      import('./components/page2').then((Page2) => {
        console.log("page2::", Page2);
        this.setState({
          route: route,
          component: Page2.default
        });
      }).catch((e) => {
        console.log("Error from page 2" + e);
      });
    } else if (route === 'Page3') {
      console.log("PAGE3::", route);
      import('./components/page3').then((Page3) => {
        console.log("page3::", Page3.default);
        this.setState({
          route: route,
          component: Page3.default
        });
      }).catch((e) => {
        console.log("Error from page 3 :" + e);
      });
    } */
  }


  render() {
    if (this.state.route === 'Page1') {
      console.log("Route is :", this.state.component);
      return <Page1 onRouteChange = {
        this.onRouteChange
      }
      />
    } else if (this.state.route === 'Page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/page2'));
      return <AsyncPage2 onRouteChange = {
        this.onRouteChange
      }
      />
    } else if (this.state.route === 'Page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/page2'));
      return <AsyncPage3 onRouteChange = {
        this.onRouteChange
      }
      />
    }
  }
}

export default App;