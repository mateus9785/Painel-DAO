import { TinyButtonContainer } from "./style";

interface TinyButtonInterface {
    text: String,
    functionOnClick: Function
}

export function TinyButtonComponent({ text, functionOnClick } : TinyButtonInterface) {
  return (
    <TinyButtonContainer onClick={(e) =>functionOnClick(e)}>{text}</TinyButtonContainer>
  );
}
