import React, { FC } from "react";
import "./Section.scss";

type Props = {
  children: React.ReactNode;
  color: 'white' | 'blue' | 'gray';
  height: 'full' | 'fill'
};

export const Section: FC<Props> = ({ children, color, height }) => {
  return (
    <section className={`${color} height-${height}`}>
      <div className="wrapper">{children}</div>
    </section>
  );
};
