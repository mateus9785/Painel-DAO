import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logoMetamask from "./../../assets/logo-metamask.svg"
import { BuyTokensContainer } from "./styles";
import { BigTitleComponent } from "./../../components/BigTitle";
import { DarkInputComponent } from "./../../components/DarkInput";
import { SmallButtonComponent } from "./../../components/SmallButton";
import { BigButtonComponent } from "./../../components/BigButton";
import { ModalComponent } from "./../../components/Modal";

const errorStatus = {
  alreadyProcessing: -32002,
  userRejected: 4001
}

export function BuyTokens() {
  const [isConnected, setIsConnected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  
  async function connectWallet(event : any) {
    event.preventDefault();

    if(window.ethereum) {
      try {
        const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        setIsOpen(false);

      } catch(error : any) {
        switch(error.code) {
          case errorStatus.alreadyProcessing:
            Swal.fire(
              'Atenção',
              'Já foi enviado uma notificação para sua Metamask, abre e visualize por favor',
              'warning'
            );
            break;
          case errorStatus.userRejected:
            Swal.fire(
              'Atenção',
              'O pedido de conecção enviado a Metamask foi rejeitado, por favor, envie novamente',
              'warning'
            );
            break;
          default:
            Swal.fire(
              'Erro',
              'Ocorreu um erro durante a conexão com a Metamask',
              'error'
            );
        }
        console.log(error);
      }
    } else {
      Swal.fire(
        'Você não possui a Metamask instalada no seu computador!',
        'Instale a Metamask no seu browser: <a href="https://metamask.io/download.html">Baixe aqui</a>',
        'question'
      );
    }
  }

  return (
    <BuyTokensContainer>
      {
        isOpen &&
        <ModalComponent title="Connect Wallet" functionOnClick={() => setIsOpen(false)}>
          <div className="metamask-card">
            <img src={logoMetamask}/>
            <span onClick={(e) => connectWallet(e)}>Metamask</span>
          </div>
        </ModalComponent>
      }
      <div>
        <BigTitleComponent text="Buy Tokens"/>
        <DarkInputComponent text={"Spend"}></DarkInputComponent>
        <DarkInputComponent text={"Receive"}></DarkInputComponent>
        {
          !isConnected ? (
            <SmallButtonComponent
              functionOnClick={() => setIsOpen(true)}
              text={"Conectar Wallet"}
            />
            ) : (
              <SmallButtonComponent text={"Buy"} functionOnClick={() => {}}/>
          )
        }
        <Link to="/saleContract" className="link-sale-contract">Advanced purchase with smart contract</Link>
      </div>
    </BuyTokensContainer>
  );
}
