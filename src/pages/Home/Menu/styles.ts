import styled from "styled-components";

export const MenuContainer = styled.main`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
  }

  .buttons-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.25rem;
    padding: 3rem;
  }

  .ancap-icon {
    max-width: 10rem;
    max-height: 10rem;
  }
`
