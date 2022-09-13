import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme['yellow-500']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Hammersmith One', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    /* @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
        .wrapper {
            grid-template-columns: 1fr;
        }
    } */
`