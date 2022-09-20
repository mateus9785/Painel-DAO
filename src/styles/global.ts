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

        @media (max-width: 400px) {
            background: ${(props) => props.theme['black-500']};
        }
    }

    body, input, textarea, button{
        font-family: 'Hammersmith One', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media ((max-width: 850px) or (max-height: 850px)) {
        html {
            font-size: 85%;
        }
    }

    @media ((max-width: 650px) or (max-height: 700px)) {
        html {
            font-size: 70%;
        }
    }
`