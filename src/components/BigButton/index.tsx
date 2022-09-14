import { BigButtonContainer } from "./style";

interface BigButtonInterface {
    functionOnClick: Function,
    text: String,
    icon: string
}

export function BigButtonComponent({ text, icon, functionOnClick } : BigButtonInterface) {
  return (
    <BigButtonContainer onClick={functionOnClick()}>
      <p>{text}</p>
      <img src={icon}></img>
    </BigButtonContainer>
  );
}
