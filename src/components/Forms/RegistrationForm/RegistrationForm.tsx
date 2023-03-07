import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const RegistrationForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const { registerUser } = useAuth();

  const changeHandler = (value: string) => {
    setEmail(value);
  };

  const submitHandler = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setError("Введите корректный email");
    } else {
      await registerUser(email);
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
