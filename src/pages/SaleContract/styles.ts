import styled from "styled-components";

export const SaleContractContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  padding: 1.25rem;

  span, p {
    max-width: 25rem;
    color: ${(props) => props.theme['yellow-500']};
    text-align: justify;
  }

  .button-left {
    background-color: ${(props) => props.theme['black-500']};
    border: none;
    align-self: flex-start;
  }

  @media ((max-width: 850px) or (max-height: 900px)) {
    img {
        width: 300px;
        height: 300px;
    }
  }

  @media ((max-width: 730px) or (max-height: 800px)) {
    p {
      max-width: 20rem;
    }

    img {
        width: 250px;
        height: 250px;
    }
  }

  @media ((max-width: 550px) or (max-height: 750px)) {
    img {
        width: 200px;
        height: 200px;
    }
  }

  @media (max-width: 350px) {
    div{
      display: flex;
      flex-direction: column;
    }

    img {
        width: 150px;
        height: 150px;
    }
  }

  @media (max-height: 600px) {
    img {
        width: 150px;
        height: 150px;
    }
  }
`
