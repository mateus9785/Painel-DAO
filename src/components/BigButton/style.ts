import styled from "styled-components";

export const BigButtonContainer = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme['yellow-500']};

    border-radius: 1.125rem;
    border: none;
    padding: 1.5rem 3rem;
    max-width: 25rem;
    width: 100%;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.8)
    }

    text-transform: uppercase;
    color: ${(props) => props.theme['black-500']};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 30px;
    text-align: center;

    @media ((max-width: 550px)  or (max-height: 850px)) {
        padding: 1rem 2rem;
        font-size: 1.2rem;
    }
`
