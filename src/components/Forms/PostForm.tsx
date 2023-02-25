import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface Props {
  addPost: (post: any) => void;
  cancel: () => void;
}

export const PostForm: FC<Props> = ({ addPost, cancel }) => {
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const submitHandler = async () => {
    const post = await api.addPost(text);
    addPost(post.data);    
  };

  const cancelHandler = async () => {
    cancel();
  };

  const isValidText = text.length > 0;

  return (
    <div className="block-small center">
      {/* <Input
        type="text"
        name="text"
        label=""
        value={text}
        placeholder="Напищите сообщение"
        change={changeHandler}
        error={error}
      /> */}
      <textarea rows={15} placeholder="Поделитесь опытом" onChange={changeHandler}>

      </textarea>
      <Button
        text="Отправить"
        disabled={!isValidText}
        click={submitHandler}
      />
      <Button
        text="Не отправлять сообщение"
        click={cancelHandler}
        type='link'
      />
    </div>
  );
};
