import logoAncap from "./../../../assets/logo-ancap.svg";
import logoMetamask from "./../../../assets/logo-metamask.svg";
import { BigButtonComponent } from "./../../../components/BigButton";
import { SmallButtonComponent } from "./../../../components/SmallButton";
import { useState } from 'react';

import { MenuContainer } from "./styles";

export function Menu() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWallet] = useState('');

  async function connectWallet(event : Event) {
    event.preventDefault();

    if(window.ethereum) {
      try {
        const address = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })

        console.log(address);
      } catch(err) {

      }
    } else {

    }
  }

  return (
    <MenuContainer>
      <div>
        <div className="logo">
          <img className="ancap-icon" src={logoAncap} alt="" />
        </div>
        <div className="buttons-container">
          <BigButtonComponent
            functionOnClick={connectWallet}
            icon={logoMetamask}
            text={"Metamask"}
          />
          <SmallButtonComponent text={"Next"}></SmallButtonComponent>
        </div>
      </div>
    </MenuContainer>
  );
}
