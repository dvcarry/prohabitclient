import { useEffect, useState } from "react";
import { DateCard } from "../../components/DateCard/DateCard";
import { NameForm } from "../../components/Forms/NameForm";
import { Points } from "../../components/Points/Points";
import { Section } from "../../components/Section/Section";
import { api } from "../../config/api";

interface IUser {
  id: number;
  name: string;
  points: number;
  dates?: any[];
  series: number;
}

const TeamPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  console.log("🚀 ~ file: UserPage.tsx:16 ~ TeamPage ~ user:", user);

  const getUser = async () => {
    const res = await api.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <div className="wrapper">
      <div className="mb-20">
        <h1>{user.name}</h1>
      </div>
      <div className="mb-20 flex-center">
        <span>Рейтинг: </span>        
        <Points points={user.points} />
      </div>
      <div className="mb-20">
        <span>Серия подряд: </span>        
        {user.points}
      </div>
      <div className="mb-40">
        {user.dates!.map((date) => (
          <DateCard key={date} date={date.date} done={date.done} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default TeamPage;
