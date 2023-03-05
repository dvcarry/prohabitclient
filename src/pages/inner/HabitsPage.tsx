import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { api } from "../../config/api";

interface IHabit {
  id: number;
  habit_name: string;
}

export const HabitsPage = () => {
  const [habits, setHabits] = useState<IHabit[]>([]);
  const [cur, setCur] = useState(0);

  const history = useNavigate()

  const getHabits = async () => {
    const res = await api.getHabits();
    setHabits(res);
  };

  const submitHandler = async () => {
    await api.addUserHabit(cur);
    history('/lk/addtoteam')
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div className="wrapper">
      <div className="mb-20">
        <h1>Выбери одну привычку</h1>
      </div>
      <div className="mb-20">
        Это должна быть самая важная привычка, которую ты хочешь закрепить.
      </div>
      <div className="habits">
        {habits.map((habit) => (
          <div
            onClick={() => setCur(habit.id)}
            className={habit.id === cur ? "card card-active" : "card"}
          >
            {habit.habit_name}
          </div>
        ))}
        <Button text="Сохранить" disabled={cur === 0 ? true : false} click={submitHandler} />
      </div>
    </div>
  );
};
