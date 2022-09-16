import { ModalContainer } from "./style";
import { LittleTitleComponent } from "./../LittleTitle";
import { XCircle } from "phosphor-react";

interface ModalInterface {
  title: string,
  functionOnClick: Function,
  children: React.ReactNode
}

export function ModalComponent({ title, functionOnClick, children } : ModalInterface) {
  return (
    <ModalContainer onClick={(e) => functionOnClick(e)}>
      <div className="modal-content">
        <div className="modal-header">
          <button className="button-close" onClick={(e) => functionOnClick(e)}>
            <XCircle size={40} color={"#F3BF22"}/>
          </button>
          <LittleTitleComponent text={title}/>
        </div>
        <div className="modal-body">
            {children}
        </div>
      </div>
    </ModalContainer>
  );
}
