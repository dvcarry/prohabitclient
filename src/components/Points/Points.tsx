import { FC } from "react";
import "./Points.scss";

type PointsProps = {
  points: number;
};

export const Points: FC<PointsProps> = ({ points }) => {
  return (
    <span className="points_block">
      <span className="star">&#9733;</span>
      <span>{points}</span>
    </span>
  );
};
