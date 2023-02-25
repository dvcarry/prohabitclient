import { useEffect, useState } from "react";
import { MdTaskAlt } from "react-icons/md";

import { Button } from "../../components/Button/Button";
import { PostForm } from "../../components/Forms/PostForm";
import { Post } from "../../components/Post/Post";
import { Section } from "../../components/Section/Section";
import { Tips } from "../../components/Tips/Tips";
import { api } from "../../config/api";
import { IPost, IUser } from "../../types";

function getWeekDay(date: Date) {
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return days[date.getDay()];
}

const ServicePage = () => {
  const today = getWeekDay(new Date());
  const [data, setData] = useState<{
    users: IUser[];
    myDone: boolean;
    posts: IPost[];
    habit: string;
  } | null>(null);
  const [open, setOpen] = useState(false);
  const [postWriting, setPostWriting] = useState(false);

  const getDones = async () => {
    const res = await api.getDones();
    setData(res);
  };

  useEffect(() => {
    getDones();
  }, []);

  if (!data) return null;

  const doneHandler = async () => {
    if (!data.myDone) {
      await api.addDone();
      const users = data.users.map((user) =>
        user.name === "Я" ? { ...user, done: true } : user
      );
      setData({ ...data, myDone: true, users });
      setPostWriting(true);
    }
  };

  const addPostHadnler = (post: IPost) => {
    const posts = [post, ...data.posts];
    setData({ ...data, posts });
    setPostWriting(false);
  };

  const cancelPostHandler = () => {
    setPostWriting(false);
  };

  const doneCount = data.users.filter((user) => user.done === true).length;
  const usersCount = data.users.length;

  return (
    <div>
      <div className="mb-20 flex">
        <h1>{data.habit}</h1>
      </div>
      <div
        className="card text-center card-blue"
        onClick={() => setOpen(!open)}
      >
        <div className="bold">{`${doneCount} / ${usersCount}`}</div>
        <div className={open ? "mt-20" : "hidden"}>
          {data.users.map((user) => (
            <div>
              {user.done && <span>&#10003;</span>} {user.name}
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          data.myDone
            ? "text-center check check-done mb-20"
            : "text-center check mb-20"
        }
      >
        <MdTaskAlt size={64} onClick={doneHandler} />
      </div>
      <Tips />

      {postWriting && (
        <PostForm addPost={addPostHadnler} cancel={cancelPostHandler} />
      )}

      {!postWriting && (
        <div className="">
          <div><Button type='link' text="Добавить сообщение" click={() => setPostWriting(true)} /></div>
          <div>
            {" "}
            {data.posts.map((post) => (
              <Post
                text={post.text}
                name={post.name}
                create_date={post.create_date}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
