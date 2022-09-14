import { BigButtonContainer } from "./style";

interface BigButtonInterface {
    functionOnClick: Function,
    text: String,
    icon: string
}

export function BigButtonComponent({ text, icon, functionOnClick } : BigButtonInterface) {
  return (
    <BigButtonContainer onClick={functionOnClick()}>
      {text}
      <img src={icon}></img>
    </BigButtonContainer>
  );
}
