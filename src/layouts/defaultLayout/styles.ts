import styled from 'styled-components'

export const LayoutContainer = styled.div` 
  height: calc(100vh - 10rem);
  padding: 2.5rem;

  background: ${(props) => props.theme['black-500']};
  border-radius: 3.125rem;
  box-shadow: -0.9375rem 0.9375rem ${(props) => props.theme['gray-500']};

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 5rem 10rem;

  @media (max-width: 1400px) {
    margin: 4rem 8rem;
  }

  @media (max-width: 1200px) {
    margin: 3rem 6rem;
  }

  @media (max-width: 550px) {
    margin: 1rem 3rem;
  }

  @media (max-width: 450px) {
    margin: 1rem 1rem;
  }

  @media (max-width: 350px) {
    margin: 0.5rem 0.5rem;
  }
`