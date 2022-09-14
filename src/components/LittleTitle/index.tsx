import { LittleTitleContainer } from "./style";

interface LittleTitleInterface {
    text: String
}

export function LittleTitleComponent({ text } : LittleTitleInterface) {
  return (
    <LittleTitleContainer>{text}</LittleTitleContainer>
  );
}
