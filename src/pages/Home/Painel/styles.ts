import styled from "styled-components";

export const PainelContainer = styled.main`
  border-style: solid;
  border-radius: 1.125rem;
  border-width: 5px;
  border-color: ${(props) => props.theme['yellow-500']};

  p, h2 {
    color: ${(props) => props.theme['yellow-500']};
  }
`
