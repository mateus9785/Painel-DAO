import logoAncap from "./../../../assets/logo-ancap.svg";
import logoBsc from "./../../../assets/logo-bsc.svg";
import logoMetamask from "./../../../assets/logo-metamask.svg";
import { BigButtonComponent } from "./../../../components/BigButton";
import { SmallButtonComponent } from "./../../../components/SmallButton";

import {
  MenuContainer
} from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <div>
        <div className="logo">
          <img className="ancap-icon" src={logoAncap} alt="" />
        </div>
        <div className="buttons-container">
          <BigButtonComponent icon={logoBsc} text={"Binance Smart Chain"}></BigButtonComponent>
          <BigButtonComponent icon={logoMetamask} text={"Metamask"}></BigButtonComponent>
          <SmallButtonComponent text={"Next"}></SmallButtonComponent>
        </div>
      </div>
    </MenuContainer>
  );
}
