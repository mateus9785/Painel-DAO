import qrCode from "./../../assets/qr-code.svg";
import { BigTitleComponent } from "./../../components/BigTitle";
import { TinyButtonComponent } from "./../../components/TinyButton";
import { DefaultLayout } from "./../../layouts/defaultLayout";
import { SaleContractContainer } from "./styles";
import translateText from "./../../common/translateText";
import { Link } from "react-router-dom";

export function SaleContract() {
  const address = "0xa01155d58BeDa10E763d0E79fA91d4f2De828D93";
  const addressMiddle = Math.round(address.length / 2);

  return (
    <DefaultLayout>
      <SaleContractContainer>
        <BigTitleComponent text={translateText("pages.saleContract.texts.saleContract")}/>
        <p>{translateText("pages.saleContract.texts.aboutTransation")}</p>
        <img src={qrCode} />
        <div>
          <span>{address.substring(0, addressMiddle)}</span>
          <span>{address.substring(addressMiddle, address.length)}</span>
        </div>
        <TinyButtonComponent 
          functionOnClick={() => {navigator.clipboard.writeText(address)}} 
          text={translateText("pages.saleContract.buttons.copy")}
        />
        <Link to="/" className="link-buy-tokens">{translateText("pages.saleContract.link.inicialPage")}</Link>
      </SaleContractContainer>
    </DefaultLayout>
  );
}
