import { createGlobalStyle } from 'styled-components';
import Electrolize from '../assets/fonts/Electrolize-Regular.ttf';

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

export default GlobalStyle;