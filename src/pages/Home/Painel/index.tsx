import logoAncap from "./../../../assets/logo-ancap.svg";
import logoBsc from "./../../../assets/logo-bsc.svg";
import logoMetamask from "./../../../assets/logo-metamask.svg";
import { BigButtonComponent } from "./../../../components/BigButton";

import {
  PainelContainer
} from "./styles";

export function Painel() {
  return (
    <PainelContainer>
      <div>
        <img className="ancap-icon" src={logoAncap} alt="" />
        <BigButtonComponent icon={logoBsc} text={"Binance Smart Chain"}></BigButtonComponent>
        <BigButtonComponent icon={logoMetamask} text={"Metamask"}></BigButtonComponent>
      </div>
      <div>
        
      </div>
    </PainelContainer>
  );
}
