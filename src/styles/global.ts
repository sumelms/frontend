import { createGlobalStyle } from 'styled-components';

import colors from './colors';

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

    font-family: var(--font-family-sans-serif);
    font-size: 14px;
  }

  :root {
    --font-family-sans-serif: 'Roboto', sans-serif;

    --primary: ${colors.primary};
        
    --white: ${colors.white};
    --black: ${colors.black};

    --light: ${colors.light};

    --light-grey: ${colors.lightGrey};
    --grey: ${colors.grey};
    --dark-grey: ${colors.darkGrey}; 
    
    --danger: ${colors.danger};
    --warning: ${colors.warning};
    --info: ${colors.info};
    --success: ${colors.success};
  }
`;
