import styled from "styled-components";

export const TinyButtonContainer = styled.button`
    
    background: ${(props) => props.theme['yellow-500']};;
    text-align: center;
    border-radius: 1.3125rem;
    border: none;
    padding: 0.1rem 1.5rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['black-500']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 30px;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.8)
    }
`
