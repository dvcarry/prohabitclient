import { FC } from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  click: () => void;
  type?: string;
};

export const Button: FC<ButtonProps> = ({ text, disabled, type = 'main', click }) => {
  return <button onClick={click} className={type === 'main' ? 'btn' : 'btn-link'} disabled={disabled}>{text}</button>;
};
