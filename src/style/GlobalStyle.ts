import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Barlow Semi Condensed';
        src: url('/rock-paper-scissors/font/BarlowSemiCondensed-Bold.woff') format('woff'), url('/font/BarlowSemiCondensed-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swamp;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html { font-size: 62.5% }

    button {
        text-transform: uppercase;
    }
    
    html,
    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
        text-transform: uppercase;
    }
`;
