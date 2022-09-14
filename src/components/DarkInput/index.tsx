import { DarkInputContainer } from "./style";

interface DarkInputInterface {
  text: string
}

export function DarkInputComponent({ text } : DarkInputInterface) {
  return (
    <DarkInputContainer type="text" placeholder={text} />
  );
}
