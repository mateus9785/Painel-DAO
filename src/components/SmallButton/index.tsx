import { SmallButtonContainer } from "./style";

interface SmallButtonInterface {
    functionOnClick: Function,
    text: String
}

export function SmallButtonComponent({ text, functionOnClick } : SmallButtonInterface) {
  return (
    <SmallButtonContainer onClick={(e) =>functionOnClick(e)}>
      <p>{text}</p>
    </SmallButtonContainer>
  );
}
