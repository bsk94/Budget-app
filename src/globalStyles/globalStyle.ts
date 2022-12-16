import { createGlobalStyle } from 'styled-components';
import Electrolize from '../assets/fonts/Electrolize-Regular.ttf';
import styled from 'styled-components';
import { media } from './mediaQueries';

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    button {
         cursor: pointer;
         font-family: "Electrolize-Regular";
    }

    ul {
         list-style: none
    }
    
    html { 
        font-size: 62.5%;
         @media screen and (max-width: 600px){
        font-size: 50%;
        }
    } 

    body {
        font-size: 1.6em; 
        font-family: "Electrolize-Regular";
    }

    @font-face {
    font-family: 'Electrolize-Regular';
    src: url(${Electrolize}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    }

`;

export const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 25rem auto;
  grid-template-rows: 9rem auto;

  ${media.mobile} {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 8vh auto 8vh;
  }
`;

export default GlobalStyle;
