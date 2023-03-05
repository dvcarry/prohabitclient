import { RegistrationForm } from "../../components/Forms/RegistrationForm";
import { Section } from "../../components/Section/Section";
import friens from "../../assets/friends.png";
import img1 from "../../assets/1.png";
import { Button } from "../../components/Button/Button";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  useCheckAuth();

  return (
    <div className="text-center">
      <div className="logo_block">
        <span className="logo">
          <span className="logo-blue">Pro</span>
          <span className="logo-red">Habit</span>
        </span>
      </div>
      <Section color={"white"} height={"fill"}>
        <h1>Формируй привычки в&nbsp;компании единомышленников</h1>
        <div className="mt-20">Сервис для формирования привычек. </div>
        <div className="mb-20">
          Ты будешь приобретать привычки в небольшой команде людей. Здесь ты
          получишь поддержку и сможешь оказать её другим. Бесплатно.
        </div>
        <div>
          <img src={friens} />
        </div>
        <RegistrationForm />
      <div className="mt-20">
        <Link to='/login'>Войти</Link>
      </div>
      </Section>
      {/* <Section color="gray" height="fill">
        <div className="mb-20">
          <h2>
            Новые привычки приобретаются сложно? Попробуй&nbsp;по&nbsp;другому!
          </h2>
        </div>
        <div className="grid">
          <div>
            <h3>Одна привычка</h3>
            <div>
              Одна из главных ошибок - это пытаться изменить все сразу. Здесь ты
              начнёшь с одной самой важной для тебя привычки.
            </div>
          </div>
          <div>
            <img src={img1} className="phone_img" />
          </div>
          <div>
            <h3>Поддержка</h3>
            <div>
            Команда постарается поддержать тебя, в случае успеха или провала!
            </div>
          </div>
          <div>
            <img src={img1} className="phone_img" />
          </div>

        </div>
      </Section> */}
      <Section color="gray" height="fill">
        <div className="mb-20">
          <h2>
            Новые привычки приобретаются сложно? Попробуй&nbsp;по&nbsp;другому!
          </h2>
        </div>
        <div className="grid">
          <Card
            heading="Одна привычка"
            text="Одна из главных ошибок - это пытаться изменить все сразу. Здесь ты начнёшь с одной самой важной для тебя привычки."
          />
          <Card
            heading="Поддержка"
            text="Команда постарается поддержать тебя, в случае успеха или провала!"
          />
          <Card
            heading="Обмен опытом"
            text="Каждый делиться своим опытом и помогает другому члену команды."
          />
          <Card
            heading="Геймификация"
            text="Ты зарабатываешь как личные очки, так и очки всей команды."
          />
        </div>
      </Section>
      <Section color={"white"} height={"fill"}>
        <div className="mb-20">
          <h1>Начни сейчас, а&nbsp;не&nbsp;с&nbsp;понедельника!</h1>
        </div>
        <RegistrationForm />
      </Section>
      <div className="mb-20">
        <Link to="policy">Политика конфидициальности</Link>
        <div className="font-gray mt-20">skvictorovich@yandex.ru</div>
      </div>
    </div>
  );
};

export default LandingPage;
