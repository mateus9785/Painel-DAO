import { SmallButtonContainer } from "./style";

interface SmallButtonInterface {
    text: String
}

export function SmallButtonComponent({ text } : SmallButtonInterface) {
  return (
    <SmallButtonContainer>
      <p>{text}</p>
    </SmallButtonContainer>
  );
}
