import styled from "styled-components";

export const BigButtonContainer = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme['yellow-500']};

    border-radius: 1.125rem;
    border: none;
    padding: 2rem 3rem;
    max-width: 25rem;
    width: 100%;

    text-transform: uppercase;
    color: ${(props) => props.theme['black-500']};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 30px;

    p{
        background-color: red;
    }

    img{
        background-color: red;
        max-width: 2rem;
        max-height: 2rem;
    }
`
