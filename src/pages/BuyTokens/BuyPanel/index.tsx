import { SmallButtonComponent } from "./../../../components/SmallButton";
import { DarkInputComponent } from "./../../../components/DarkInput";
import { BigTitleComponent } from "./../../../components/BigTitle";

import {
  BuyPanelContainer
} from "./styles";

export function BuyPanel() {
  return (
    <BuyPanelContainer>
      <BigTitleComponent text="Buy Tokens"/>
      <form>
        <DarkInputComponent text={"Spend"}></DarkInputComponent>
        <DarkInputComponent text={"Receive"}></DarkInputComponent>
        <div>
          <SmallButtonComponent text={"Buy"}></SmallButtonComponent>
        </div>
      </form>
    </BuyPanelContainer>
  );
}
