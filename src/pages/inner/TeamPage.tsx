import { useEffect, useState } from "react";
import { Points } from "../../components/Points/Points";
import { api } from "../../config/api";
import { getRelativeTime } from "../../helpers/getRelativeTime";

interface ITeam {
  id: number;
  users: any[];
  points: number;
}

const TeamPage = () => {
  const [team, setTeam] = useState<ITeam | null>(null);

  const getTeam = async () => {
    const res = await api.getTeam();
    setTeam(res);
  };

  useEffect(() => {
    getTeam();
  }, []);

  if (!team) return null;

  return (
    <div className="wrapper">
      <div className="mb-20">
        <div className="heading">Моя команда</div>        
      </div>
      <div className="mb-20 flex-center">
        <span>Рейтинг команды: </span>
        <Points points={team.points} />       
      </div>
      <div className="mb-40">
        {team.users.map((user) => (
          <div className="card flex-between">
            <div>                
              <div className="bold">{user.name}</div>
              {user.today_done ? <span className="green">Выполнено сегодня</span> : <span className="red">Не выполнено сегодня</span>}
              <div className="font-gray text-small mt-10">{user.last_login && `Был(а) ${getRelativeTime(user.last_login)}`}</div>
            </div>
            <Points points={user.points} />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default TeamPage;
