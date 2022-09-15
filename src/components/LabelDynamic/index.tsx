import { LabelDynamicContainer } from "./style";

interface LabelDynamicInterface {
  label: String,
  text: String
}

export function LabelDynamicComponent({ label, text } : LabelDynamicInterface) {
  return (
    <LabelDynamicContainer><span>{label}: </span>{text}</LabelDynamicContainer>
  );
}
