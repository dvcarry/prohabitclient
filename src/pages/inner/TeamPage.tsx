import { useEffect, useState } from "react";
import { NameForm } from "../../components/Forms/NameForm";
import { Section } from "../../components/Section/Section";
import { api } from "../../config/api";

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
    <div>
      <div className="mb-40">
        <h1>Твоя команда</h1>
      </div>
      <div className="mb-40">
        Команда создана, чтобы поддерживать тебя и нуждается в твоей поддержке. За каждую твоё выполненую привычку вся команда получает очки.
      </div>
      <div className="mb-40">
        {
            team.users.map(user => <div>{user.name}</div>)
        }
      </div>
      <div >
        <NameForm />
      </div>
    </div>
  );
};

export default TeamPage;