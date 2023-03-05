import { FC } from "react";
import { getRelativeTime } from "../../helpers/getRelativeTime";
import "./Post.scss";

type PostProps = {
  name: string;
  text: string;
  create_date: Date;
  type: 'user' | 'system';
};

export const Post: FC<PostProps> = ({ name, text, create_date, type }) => {
  return (
    <div className="mb-40 post">
      <div className="post_block"><span className="post_name">{name}</span><span className="post_time">{getRelativeTime(create_date)}</span></div>
      <div>{type === 'system' ? `🔥 ${text}` : text}</div>
    </div>
  );
};
