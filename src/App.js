import React, { Component } from 'react';
// goorm strap import하기
import '@goorm-dev/gds-goormstrap';
import '@goorm-dev/gds-goormstrap/dist/goormstrap-dark.min.css';
import Router from './Router';
class App extends Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;
