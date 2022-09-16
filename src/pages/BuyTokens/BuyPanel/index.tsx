import Swal from 'sweetalert2';
import { useState } from 'react';
import { BuyPanelContainer } from "./styles";
import { BigTitleComponent } from "./../../../components/BigTitle";
import { DarkInputComponent } from "./../../../components/DarkInput";
import { SmallButtonComponent } from "./../../../components/SmallButton";
import { BigButtonComponent } from "./../../../components/BigButton";

export function BuyPanel() {
  const errorStatus = {
    alreadyProcessing: -32002,
    userRejected: 4001
  }

  const [isConnected, setIsConnected] = useState(false);

  async function connectWallet(event : Event) {
    event.preventDefault();

    if(window.ethereum) {
      try {
        const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);

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
    <BuyPanelContainer>
      <BigTitleComponent text="Buy Tokens"/>
      <form>
        <DarkInputComponent text={"Spend"}></DarkInputComponent>
        <DarkInputComponent text={"Receive"}></DarkInputComponent>
        <div>
          {
            !isConnected ? (
              <BigButtonComponent
                functionOnClick={connectWallet}
                text={"Conectar Wallet"}
              />
              ) : (
                <SmallButtonComponent text={"Buy"}></SmallButtonComponent>
            )
          }
        </div>
      </form>
    </BuyPanelContainer>
  );
}
