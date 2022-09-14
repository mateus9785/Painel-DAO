import logoAncap from "./../../../assets/logo-ancap.svg";
import logoMetamask from "./../../../assets/logo-metamask.svg";
import { BigButtonComponent } from "./../../../components/BigButton";
import { SmallButtonComponent } from "./../../../components/SmallButton";
import { useState } from 'react';

import { MenuContainer } from "./styles";

export function Menu() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWallet] = useState('');

  const pressedConnectWallet = async () => {
    if(isConnected) return alert("Conta já conectada: " + walletAddress)

    const walletResponse = await connectWallet();
    setIsConnected(walletResponse.connectedStatus);
    setWallet(walletResponse.address);
  }

  const connectWallet = async () => {
    if(window.ethereum) {
      try {
        const address = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })

        const object = {
          connectedStatus: true,
          status: 'Conectado com sucesso',
          address
        }

        return object;
      } catch(err) {
        return {
          connectedStatus: false,
          status: "Erro ao conectar carteira"
        }
      }
    } else {
      return {
        connectedStatus: false,
        status: "Metamask não instalada no navegador"
      }
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
            functionOnClick={pressedConnectWallet}
            icon={logoMetamask}
            text={"Metamask"}
          />
          <SmallButtonComponent text={"Next"}></SmallButtonComponent>
        </div>
      </div>
    </MenuContainer>
  );
}
