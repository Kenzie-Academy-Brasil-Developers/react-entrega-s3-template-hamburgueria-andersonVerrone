import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --main-color: #27AE60;
        --main-color-hover : #93D7AF;
        --second-color: #EB5757;
        --gray600: #333333;
        --gray300: #828282;
        --gray100: #E0E0E0;
        --gray000: #F5F5F5;
        --white: #FFFFFF;
        --negative: #E60000;
        --warning:  #FFCD07;
        --sucess:   #168821;
        --Information: #155BCB;

        --font-main: 'Inter', sans-serif;

    }

    body {
        font-family: var(--font-main);
        background-color: var(--gray000);
        max-width: 100vw;
        min-height: 100vh;
        user-select: none;
    }

    .loadingContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;

        >img {
            max-width: 80%;
        }
    }
`