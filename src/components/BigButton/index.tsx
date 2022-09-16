import { BigButtonContainer } from "./style";

interface BigButtonInterface {
    functionOnClick: Function,
    text: String
}

export function BigButtonComponent({ text, functionOnClick } : BigButtonInterface) {
  return (
    <BigButtonContainer onClick={(e) =>functionOnClick(e)}>
      {text}
    </BigButtonContainer>
  );
}
