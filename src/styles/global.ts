import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--light);
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  :root {
    --primary: #D72D35;
        
    --white: #fff;
    --black: #232323;

    --light: #F8F8FB;

    --light-grey: #C9CED6;
    --grey: #A6ACBE;
    --dark-grey: #423F3F; 
    
    --danger: #FF4A31;
    --warning: #FFDE31;
    --info: #32B5ED;
    --success: #56C676;
  }
`;
