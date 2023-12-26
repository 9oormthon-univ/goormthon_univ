import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

// goorm strap import하기
import '@goorm-dev/gds-goormstrap';
import '@goorm-dev/gds-goormstrap/dist/goormstrap-dark.min.css';
import Router from './Router';
import GlobalStyle from './style/globalStyle';
import { theme } from './style/theme';

class App extends Component {
  render() {
    return (
      <>
        {/* <ThemeProvider theme={theme}> */}
        {/* <GlobalStyle /> */}

        <Router />
        {/* </ThemeProvider> */}
      </>
    );
  }
}

export default App;
