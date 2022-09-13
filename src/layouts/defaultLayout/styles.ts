import styled from 'styled-components'

export const LayoutContainer = styled.div` 
  max-width: 90rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['black-500']};
  border-radius: 3.125rem;
  box-shadow: -0.9375rem 0.9375rem ${(props) => props.theme['gray-500']};

  display: flex;
  flex-direction: column;
  justify-content: center;
`