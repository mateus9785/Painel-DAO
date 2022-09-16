import qrCode from "./../../assets/qr-code.svg";
import { ArrowCircleLeft } from "phosphor-react";
import { BigTitleComponent } from "./../../components/BigTitle";
import { TinyButtonComponent } from "./../../components/TinyButton";
import { SaleContractContainer } from "./styles";
import { useNavigate } from 'react-router-dom';

export function SaleContract() {
  const navigate = useNavigate();
  const address = "0xa01155d58BeDa10E763d0E79fA91d4f2De828D93";
  const addressMiddle = Math.round(address.length / 2);

  return (
    <SaleContractContainer>
      <button className="button-left" onClick={() => navigate('/')}>
        <ArrowCircleLeft size={40} color={"#F3BF22"}/>
      </button>
      <BigTitleComponent text="Sale Contract"/>
      <p>
        You can also buy tokens by sending BNB directly 
        from your wallet to this contract 
        (please increase gas limit to 200,000 or even more for 
        tokens with special functions like autoLP, swaps, etc.)
      </p>
      <img src={qrCode} />
      <div>
        <span>{address.substring(0, addressMiddle)}</span>
        <span>{address.substring(addressMiddle, address.length)}</span>
      </div>
      <TinyButtonComponent functionOnClick={() => {navigator.clipboard.writeText(address)}} text={"Copy"}/>
    </SaleContractContainer>
  );
}
