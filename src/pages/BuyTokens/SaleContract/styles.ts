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
  }

  p {
    color: ${(props) => props.theme['yellow-500']};
  }

  .address{
    gap: 1.25rem;
  }
`
