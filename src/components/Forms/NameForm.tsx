import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";



export const NameForm = () => {
  const [error] = useState("");
  const [name, setName] = useState("");

  const history = useNavigate();

  const changeHandler = (value: string) => {
    setName(value);
  };

  const submitHandler = async () => {
    await api.changeUserName(name);
    history("/lk");
  };

  const isValidName = name.length > 0;

  return (
    <div className="block-small center">
      <Input
        type="email"
        name="email"
        label=""
        value={name}
        placeholder="Твоё имя"
        change={changeHandler}
        error={error}
      />
      <Button
        text="Присоединиться"
        disabled={!isValidName}
        click={submitHandler}
      />
    </div>
  );
};
