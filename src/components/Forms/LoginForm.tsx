import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const LoginForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const changeEmailHandler = (value: string) => {
    setEmail(value);
  };

  const changePasswordHandler = (value: string) => {
    setPassword(value);
  };

  const submitHandler = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setError("Введите корректный email");
    } else {
      const response = await api.login({ email, password });
      console.log("🚀 ~ file: LoginForm.tsx:33 ~ submitHandler ~ response:", response)
      if (response.success) {
        localStorage.setItem("prohabit", JSON.stringify({ token: response.token }));
        history("/lk");
      } else {
        setError("Неправильный логин или пароль")
      };   
    };
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
          change={changeEmailHandler}
          error={error}
        />
        <Input
          type="password"
          name="password"
          label=""
          value={password}
          placeholder="пароль"
          change={changePasswordHandler}
          error={error}
        />
        <Button text="Войти" click={submitHandler} />
      </div>
    </div>
  );
};