import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    /* font-size: 62.5%; */
    font-size: 16px;
  }

  body {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
