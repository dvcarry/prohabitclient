import { Line } from "rc-progress";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { PostForm } from "../../components/Forms/PostForm";
import { Points } from "../../components/Points/Points";
import { Post } from "../../components/Post/Post";
// import { Tips } from "../../components/Tips/Tips";
import { api } from "../../config/api";
import { IPost, IUser } from "../../types";

// function getWeekDay(date: Date) {
//   let days = [
//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//   ];
//   return days[date.getDay()];
// }

const ServicePage = () => {
  const [data, setData] = useState<{
    users: IUser[];
    myDone: boolean;
    posts: IPost[];
    habit: string;
    myPoints: number;
    teamPoints: number;
    myName: string;
  } | null>(null);
  // const [open, setOpen] = useState(false);
  const [postWriting, setPostWriting] = useState(false);

  const history = useNavigate()

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
      const response = await api.addDone();
      if (response.success) {
        const users = data.users.map((user) =>
          user.name === "Я" ? { ...user, done: true } : user
        );
        let newData = {
          ...data,
          myDone: true,
          users,
          myPoints: data.myPoints + 1,
          teamPoints: data.teamPoints + response.data.points,
        };
        if (response.data.post) {
          newData = {
            ...newData,
            posts: [response.data.post, ...newData.posts],
          };
        }
        setData(newData);
        setPostWriting(true);
      }
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
      <div>
        <div className="wrapper">
          <div className="mb-20 flex">
            <div className="heading">{data.habit}</div>
          </div>
          <div className="kpi_blocks">
            <div className="kpi_block" onClick={() => history('user')}>
              <div className="block_flex_between mb-20">
                <div className="emoji_block">
                  <span>😏</span>
                </div>
                <Points points={data.myPoints} />
              </div>
              <h5>{data.myName}</h5>
              <Line
                percent={data.myDone ? 100 : 0}
                strokeWidth={6}
                trailWidth={6}
                strokeColor="#ff8703"
                trailColor="#D3D3D3"
              />
              <div className="indicators_today">
                {data.myDone ? "Готово!" : "0"}
              </div>
            </div>
            <div className="kpi_block" onClick={() => history('team')}>
              <div className="block_flex_between mb-20">
                <div className="emoji_block">
                  <span>&#127942;</span>
                </div>
                <Points points={data.teamPoints} />
              </div>
              <h5>Команда</h5>
              <Line
                percent={(doneCount / usersCount) * 100}
                strokeWidth={6}
                trailWidth={6}
                strokeColor="#ff8703"
                trailColor="#D3D3D3"
              />
              <div className="indicators_today">{`${doneCount} / ${usersCount}`}</div>
            </div>
          </div>
          {postWriting ? (
            <PostForm addPost={addPostHadnler} cancel={cancelPostHandler} />
          ) : (
            <>
              {!data.myDone && (
                <Button text="Выполнено сегодня" click={doneHandler} />
              )}
              {/* <Tips /> */}
            </>
          )}
        </div>
      </div>
      {!postWriting && (
        <>
          <div className="wrapper-width block_flex_between mb-20">
            <div className="heading">Сообщения</div>
            <span className="plus" onClick={() => setPostWriting(true)}>
              +
            </span>
          </div>
          <div className="wrapper posts">
            <div>
              {" "}
              {data.posts.map((post) => (
                <Post
                  key={post.id}
                  text={post.text}
                  name={post.name}
                  create_date={post.create_date}
                  type={post.user_id === 0 ? "system" : "user"}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicePage;
