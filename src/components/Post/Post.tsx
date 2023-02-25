import { FC } from "react";
import { getRelativeTime } from "../../helpers/getRelativeTime";
import "./Post.scss";

type PostProps = {
  name: string;
  text: string;
  create_date: Date;
};

export const Post: FC<PostProps> = ({ name, text, create_date }) => {
  return (
    <div className="mb-40">
      <div className="post_block"><span className="post_name">{name}</span><span className="post_time">{getRelativeTime(create_date)}</span></div>
      <div>{text}</div>
    </div>
  );
};
