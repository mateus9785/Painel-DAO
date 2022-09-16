import styled from "styled-components";

export const LittleTitleContainer = styled.h2`
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-500']};
    font-size: 1.875rem;
    text-align: center;

    @media (max-width: 350px) {
        font-size: 1.2rem;
    }
`
