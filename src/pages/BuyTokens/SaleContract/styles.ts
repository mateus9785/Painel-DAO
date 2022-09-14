import styled from "styled-components";

export const SaleContractContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }

  p {
    color: ${(props) => props.theme['yellow-500']};
  }
`
