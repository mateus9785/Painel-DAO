import styled from "styled-components";

export const SmallButtonContainer = styled.button`
    
    background: ${(props) => props.theme['yellow-500']};;
    text-align: center;
    border-radius: 1.3125rem;
    border: none;
    padding: 0.7rem 4rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['black-500']};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 30px;
    cursor: pointer;
    transition: filter 0.2s;

    @media ((max-width: 650px)) {
        padding: 0.7rem 2rem;
    }

    @media ((max-width: 400px)) {
        padding: 0.7rem 2rem;
        font-size: 1rem;
    }
`
