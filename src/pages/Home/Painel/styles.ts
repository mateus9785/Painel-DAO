import styled from "styled-components";

export const PainelContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  padding: 3rem;
  border-style: solid;
  border-radius: 3rem;
  border-width: 0.1875rem;
  border-color: ${(props) => props.theme['yellow-500']};

  div{
    align-self: flex-start;
  }

  p {
    color: ${(props) => props.theme['yellow-500']};
  }
`
