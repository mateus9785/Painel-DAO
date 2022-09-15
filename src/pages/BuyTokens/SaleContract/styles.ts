import styled from "styled-components";

export const SaleContractContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 31.25rem;
    height: 100%;

    @media (max-width: 1000px) {
      max-width: 29rem;
    }
  }

  p {
    color: ${(props) => props.theme['yellow-500']};
  }

  .address{
    gap: 1.25rem;
    img {

      @media (max-width: 1000px) {
        width: 300px;
        height: 300px;
      }

      @media (max-width: 800px) {
        width: 150px;
        height: 150px;
      }
    }
  }
`
