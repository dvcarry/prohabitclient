import { FC } from "react";
import "./Card.scss";

type CardProps = {
  heading: string;
  text: string;
  icon?: string;
};

export const Card: FC<CardProps> = ({ heading, text, icon }) => {
  return (
    <div className="landing_card">
      {icon && <div className="icon">{icon}</div>}
      <div className="heading">{heading}</div>
      <div className="text mt-20">{text}</div>
    </div>
  );
};
