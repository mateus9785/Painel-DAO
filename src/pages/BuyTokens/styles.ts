import styled from "styled-components";

export const BuyTokensContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  margin: 2rem;
  height: 100%;
  flex: 1;

  .link-sale-contract{
    text-decoration: none;
    color: ${(props) => props.theme['grey-800']};
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.7)
    }
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 3rem;
  }

  .metamask-card{
    img{
      width: 150px;
      height: 150px;

      @media ((max-width: 850px) or (max-height: 600px)) {
        width: 100px;
        height: 100px;
      }
    }

    span{
      text-align: center;
      font-size: 1.5rem;
      color: ${(props) => props.theme['yellow-500']};
      cursor: pointer;
      transition: filter 0.2s;
      &:hover{
          filter: brightness(0.7)
      }
    }
  }
`
