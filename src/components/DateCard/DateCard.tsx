import { FC } from "react";
import "./DateCard.scss";

type DateCardProps = {
  date: string;
  done: boolean;
};

export const DateCard: FC<DateCardProps> = ({ date, done }) => {
  return <div className="datecard">
    <span className={done ? 'date-done' : 'date-undone'}></span>
    <span className="datecard_date">{new Date(date).toLocaleDateString('ru-RU')}</span>
  </div>;
};
