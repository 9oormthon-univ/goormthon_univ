import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './Router';
import GlobalStyle from './style/globalStyle';
import { theme } from './style/theme';

class App extends Component {
  render() {
    return (
      <>
        {/* <ThemeProvider theme={theme}>
          <GlobalStyle /> */}
        <Router />
        {/* </ThemeProvider> */}
      </>
    );
  }
}

export default App;
