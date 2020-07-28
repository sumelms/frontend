import styled from 'styled-components';

/**
 * Grid Areas
 *
 * LS : Left Sidebar
 * TN : Top Navigation
 * MC : Main Content
 */

export const Container = styled.div`
  display: grid;

  grid-template-columns: 80px auto;
  grid-template-rows: 80px auto;

  grid-template-areas:
    'LS TN'
    'LS MC';

  height: 100vh;
`;
