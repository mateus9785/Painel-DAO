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

    @media (max-width: 768px) {
        html {
            font-size: 90%;
            font-size: 80%;
            font-size: 70%;
            font-size: 60%;
            font-size: 50%;
            font-size: 40%;
            font-size: 30%;
            font-size: 20%;
            font-size: 10%;
        }
        .wrapper {
            grid-template-columns: 1fr;
        }
    }
`