import { useNavigate } from "react-router-dom";
import { api } from "../config/api";
import { LOCALSTORAGE_NAME } from "../config/constatnts";

export const useAuth = () => {
  const history = useNavigate();

  const registerUser = async (email: string) => {
    const user = await api.registration({ email });
    localStorage.setItem(
      LOCALSTORAGE_NAME,
      JSON.stringify({ token: user.data })
    );
    history("/lk/habits");
  };

  return { registerUser };
};
