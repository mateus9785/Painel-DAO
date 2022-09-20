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

  .trade-tokens{
    color: ${(props) => props.theme['yellow-500']};
  }
  .input-buy-token{
    .label-buy-token{
      display: flex;
      flex-direction: row;
      gap: 1rem;
      color: ${(props) => props.theme['yellow-500']};
      align-items: center;
      justify-content: flex-start;
    }
    img{
      width: 30px;
      height: 30px;
    }
  }

  .link-sale-contract{
    text-decoration: none;
    color: ${(props) => props.theme['grey-800']};
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.7)
    }
  }

  .div-buy-token{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 3rem;
  }

  .metamask-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
