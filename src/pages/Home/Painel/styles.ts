import styled from "styled-components";

export const PainelContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 3rem;
  margin: 3rem;
  border-style: solid;
  border-radius: 3rem;
  border-width: 0.1875rem;
  border-color: ${(props) => props.theme['yellow-500']};
  gap: 5rem;

  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  p {
    color: ${(props) => props.theme['yellow-500']};
    font-size: 1.25rem;
  }

  @media (max-width: 450px) {
    padding: 2rem;
    margin: 2rem;
  }

  @media (max-width: 350px) {
    padding: 1rem;
    margin: 1rem;
  }
`
