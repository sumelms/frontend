import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--light-grey);
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #D72D35;
        
    --white: #fff;
    --black: #232323;

    --grey: #C9CED6;
    --light-grey: #F8F8FB;
    --dark-grey: #A6ACBE;    
  }
`;
