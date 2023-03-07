import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../config/api";
import { LOCALSTORAGE_NAME } from "../../../config/constatnts";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const RegistrationForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const changeHandler = (value: string) => {
    setEmail(value);
  };

  const submitHandler = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setError("Введите корректный email");
    } else {
      const user = await api.registration({ email });
      localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({ token: user.data }));
      history("/lk/habits");
    }
  };

  return (
    <div className="center block">
      <div>
        <Input
          type="email"
          name="email"
          label=""
          value={email}
          placeholder="email"
          change={changeHandler}
          error={error}
        />
        <Button text="Зарегистрироваться" click={submitHandler} />
      </div>
    </div>
  );
};
