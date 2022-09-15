import { LittleTitleComponent } from "./../../../components/LittleTitle";
import { LabelDynamicComponent } from "./../../../components/LabelDynamic";
import { PainelContainer } from "./styles";

export function Painel() {
  return (
    <PainelContainer>
        <LittleTitleComponent text={"Token Status"}></LittleTitleComponent>
        <div>
          <LabelDynamicComponent label={"Raised"} text={"of BNB"}></LabelDynamicComponent>
          <LabelDynamicComponent label={"Tokens Sold"} text={"of Remaining"}></LabelDynamicComponent>
          <LabelDynamicComponent label={"Hardcap"} text={"BNB"}></LabelDynamicComponent>
          <LabelDynamicComponent label={"Rate"} text={"1 BNB = (~ BNB/)"}></LabelDynamicComponent>
        </div>
    </PainelContainer>
  );
}
