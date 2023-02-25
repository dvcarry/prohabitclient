import { FC } from "react";
import "./Input.scss";



type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  error: string;
  change: (data: any) => void;
  onBlur?: () => void;
};

export const Input: FC<InputProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
  error,
  change,
  onBlur
}) => {
  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    change(e.currentTarget.value);
  };

  return (
    <div className="mb-20">
      <label>{label}</label>
      <div>
        <input
          onChange={changeHandler}
          type={type}
          value={value}
          placeholder={placeholder}
          onFocus={onBlur}
        />
      </div>
      {error.length !== 0 && <div className="error">{error}</div>}
    </div>
  );
};
