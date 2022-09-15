import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    padding: 0.7rem;
  }
`
