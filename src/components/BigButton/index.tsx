import { BigButtonContainer } from "./style";

interface BigButtonInterface {
    text: String,
    icon: string
}

export function BigButtonComponent({ text, icon } : BigButtonInterface) {
  return (
    <BigButtonContainer>
      <p>{text}</p>
      <img src={icon}></img>
    </BigButtonContainer>
  );
}
