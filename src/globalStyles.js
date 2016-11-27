import { injectGlobal } from 'styled-components';

injectGlobal`
html {
  font-size: 16px
}

body {
  margin: 0
  overflow-x: hidden
}

html, body, #root {
  height: 100%
  width: 100%
}
`;
