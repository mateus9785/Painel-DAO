import qrCode from "./../../../assets/qr-code.svg";
import { BigTitleComponent } from "./../../../components/BigTitle";
import { TinyButtonComponent } from "./../../../components/TinyButton";
import { SaleContractContainer } from "./styles";

export function SaleContract() {
  return (
    <SaleContractContainer>
      <div>
        <BigTitleComponent text="Sale Contract"/>
        <p>
          You can also buy tokens by sending BNB directly 
          from your wallet to this contract 
          (please increase gas limit to 200,000 or even more for 
          tokens with special functions like autoLP, swaps, etc.)
        </p>
      </div>
      <div className="address">
        <img src={qrCode} alt="" />
        <p>0xa01155d58BeDa10E763d0E79fA91d4f2De828D93</p>
        <TinyButtonComponent text={"Copy"}></TinyButtonComponent>
      </div>
    </SaleContractContainer>
  );
}
