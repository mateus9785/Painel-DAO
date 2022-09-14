import { BuyPanel } from "./BuyPanel";
import { SaleContract } from "./SaleContract";

import {
  BuyTokensContainer
} from "./styles";

export function BuyTokens() {
  return (
    <BuyTokensContainer>
      <BuyPanel></BuyPanel>
      <SaleContract></SaleContract>
    </BuyTokensContainer>
  );
}
