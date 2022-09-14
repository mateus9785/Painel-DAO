import { SmallButtonComponent } from "./../../../components/SmallButton";
import { DarkInputComponent } from "./../../../components/DarkInput";

import {
  BuyPanelContainer
} from "./styles";

export function BuyPanel() {
  return (
    <BuyPanelContainer>
      <h2>Buy Tokens</h2>
      <form>
        <DarkInputComponent text={"Spend"}></DarkInputComponent>
        <DarkInputComponent text={"Receive"}></DarkInputComponent>
        <SmallButtonComponent text={"Buy"}></SmallButtonComponent>
      </form>
    </BuyPanelContainer>
  );
}
