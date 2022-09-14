import logoAncap from "./../../../assets/logo-ancap.svg";
import {
  PainelContainer
} from "./styles";

export function Painel() {
  return (
    <PainelContainer>
      <div>
        <h2>Token Status</h2>
        <p>Raised: of BNB</p>
        <p>Tokens Sold: of Remaining</p>
        <p>Hardcap: BnB</p>
        <p>Rate: 1 BnB = (~ BNB/)</p>
      </div>
      <div className="logo">
        <img className="ancap-icon" src={logoAncap} alt="" />
      </div>
    </PainelContainer>
  );
}
