import { TinyButtonContainer } from "./style";

interface TinyButtonInterface {
    text: String
}

export function TinyButtonComponent({ text } : TinyButtonInterface) {
  return (
    <TinyButtonContainer>
      <p>{text}</p>
    </TinyButtonContainer>
  );
}
