import { BigTitleContainer } from "./style";

interface BigTitleInterface {
    text: String
}

export function BigTitleComponent({ text } : BigTitleInterface) {
  return (
    <BigTitleContainer>{text}</BigTitleContainer>
  );
}
