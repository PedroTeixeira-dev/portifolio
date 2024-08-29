import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 1244px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  list-style-type: none;
}
`

export default GlobalStyle
