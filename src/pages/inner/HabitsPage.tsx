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
    history('/lk/team')
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <>
      <div className="mb-40">
        <h1>Выберите одну привычку</h1>
      </div>
      <div className="mb-40">
        Лучше прокачать одну привычку, нежели сбиться с пути и не получить ни одной.
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
    </>
  );
};
