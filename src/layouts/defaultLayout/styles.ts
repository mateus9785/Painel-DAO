import styled from 'styled-components'

export const LayoutContainer = styled.div` 
  height: calc(110vh - 10rem);
  padding: 2.5rem;

  background: ${(props) => props.theme['black-500']};
  border-radius: 3.125rem;
  box-shadow: -0.9375rem 0.9375rem rgba(0,0,0,0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 3rem 10rem;

  @media ((max-width: 1000px) or (max-height: 850px)) {
    margin: 3rem 6rem;
  }

  @media ((max-width: 750px) or (max-height: 800px)) {
    margin: 2rem 4rem;
  }

  @media (max-width: 550px) {
    margin: 1rem 2rem;
  }

  @media (max-width: 400px) {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`