import styled from "styled-components";

export const BigTitleContainer = styled.h2`
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-500']};
    font-size: 3.125rem;
    text-align: center;

    @media ((max-width: 550px)  or (max-height: 850px)) {
        font-size: 2.5rem;
    }

    @media ((max-width: 350px)  or (max-height: 800px)) {
        font-size: 2rem;
    }

    @media (max-width: 350px) {
        font-size: 1.5rem;
    }
`
