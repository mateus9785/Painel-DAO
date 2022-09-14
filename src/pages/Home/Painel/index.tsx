import { LittleTitleComponent } from "./../../../components/LittleTitle";
import { PainelContainer } from "./styles";

export function Painel() {
  return (
    <PainelContainer>
        <LittleTitleComponent text={"Token Status"}></LittleTitleComponent>
        <div>
          <p>Raised: of BNB</p>
          <p>Tokens Sold: of Remaining</p>
          <p>Hardcap: BnB</p>
          <p>Rate: 1 BnB = (~ BNB/)</p>
        </div>
    </PainelContainer>
  );
}
