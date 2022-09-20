import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logoMetamask from "./../../assets/logo-metamask.svg";
import logoRbtc from "./../../assets/logo-rbtc.png";
import logoAncap from "./../../assets/logo-ancap.svg";
import { BuyTokensContainer } from "./styles";
import { BigTitleComponent } from "./../../components/BigTitle";
import { DarkInputComponent } from "./../../components/DarkInput";
import { SmallButtonComponent } from "./../../components/SmallButton";
import { ModalComponent } from "./../../components/Modal";
import translateText from "./../../common/translateText";

const errorStatus = {
  alreadyProcessing: -32002,
  userRejected: 4001
}

export function BuyTokens() {
  const [isConnected, setIsConnected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  async function buyTokens(event : any) {
    event.preventDefault();

    Swal.fire({
      icon: 'success',
      title: translateText("pages.buyTokens.alerts.successfultrading.title"),
      text: translateText("pages.buyTokens.alerts.successfultrading.text"),
      background: "#27262c",
      color: "#F3BF22",
      confirmButtonColor: '#F3BF22',
      showCloseButton: true,
      confirmButtonText: '<span style="color: #27262c">OK</span>',
    });
  }

  async function connectWallet(event : any) {
    event.preventDefault();

    if(window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        setIsOpen(false);

      } catch(error : any) {
        switch(error.code) {
          case errorStatus.alreadyProcessing:
            Swal.fire({
              icon: 'warning',
              title: translateText("pages.buyTokens.alerts.alreadyProcessing.title"),
              text: translateText("pages.buyTokens.alerts.alreadyProcessing.text"),
              background: "#27262c",
              color: "#F3BF22",
              confirmButtonColor: '#F3BF22',
              showCloseButton: true,
              confirmButtonText: '<span style="color: #27262c">OK</span>',
            });
            break;
          case errorStatus.userRejected:
            Swal.fire({
              icon: 'warning',
              title: translateText("pages.buyTokens.alerts.userRejected.title"),
              text: translateText("pages.buyTokens.alerts.userRejected.text"),
              background: "#27262c",
              color: "#F3BF22",
              confirmButtonColor: '#F3BF22',
              showCloseButton: true,
              confirmButtonText: '<span style="color: #27262c">OK</span>',
            });
            break;
          default:
            Swal.fire({
              icon: 'error',
              title: translateText("pages.buyTokens.alerts.default.title"),
              text: translateText("pages.buyTokens.alerts.default.text"),
              background: "#27262c",
              color: "#F3BF22",
              confirmButtonColor: '#F3BF22',
              showCloseButton: true,
              confirmButtonText: '<span style="color: #27262c">OK</span>',
            });
        }
      }
    } else {
      const title = translateText("pages.buyTokens.alerts.dontHaveWallet.title");
      const footer = `<a style="color: #F3BF22" target="_blank" href="https://metamask.io/download.html">${translateText("pages.buyTokens.alerts.dontHaveWallet.footer")}</a>`;

      Swal.fire({
        icon: 'question',
        title,
        background: "#27262c",
        color: "#F3BF22",
        confirmButtonColor: '#F3BF22',
        showCloseButton: true,
        confirmButtonText: '<span style="color: #27262c">OK</span>',
        footer,
      });
    }
  }

  return (
    <BuyTokensContainer>
      {
        isOpen &&
        <ModalComponent title={translateText("pages.buyTokens.texts.connectWallet")} functionOnClick={() => setIsOpen(false)}>
          <div className="metamask-card">
            <img src={logoMetamask}/>
            <span onClick={(e) => connectWallet(e)}>Metamask</span>
          </div>
        </ModalComponent>
      }
      <div className="div-buy-token">
        <BigTitleComponent text={translateText("pages.buyTokens.texts.buyTokens")}/>
        <span className="trade-tokens">1 RBTC = 400 ANCAP</span>
        <div className="input-buy-token">
          <div className="label-buy-token">
            <img src={logoRbtc}></img>
            <span>RBTC</span>
            <span>$20000.00</span>
          </div>
          <DarkInputComponent text={translateText("pages.buyTokens.inputs.spend")}></DarkInputComponent>
        </div>
        <div className="input-buy-token">
          <div className="label-buy-token">
            <img src={logoAncap}></img>
            <span>ANCAP</span>
            <span>$50.00</span>
          </div>
          <DarkInputComponent text={translateText("pages.buyTokens.inputs.receive")}></DarkInputComponent>
        </div>
        {
          !isConnected ? (
            <SmallButtonComponent
              functionOnClick={() => setIsOpen(true)}
              text={translateText("pages.buyTokens.buttons.connectWallet")}
            />
            ) : (
              <SmallButtonComponent 
                text={translateText("pages.buyTokens.buttons.buy")} 
                functionOnClick={buyTokens}
              />
          )
        }
        <Link to="/saleContract" className="link-sale-contract">{translateText("pages.buyTokens.link.advancedPurchase")}</Link>
      </div>
    </BuyTokensContainer>
  );
}
