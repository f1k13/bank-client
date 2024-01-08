import { $isAuth } from "@/entities/auth/model/auth";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/shared/router/paths";
import { TextField } from "@/shared/ui/text-field";
import { useStore } from "effector-react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const isAuth = useStore($isAuth);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAuth) {
      navigate(LOGIN_ROUTE);
    } else {
      navigate(HOME_ROUTE);
    }
  };
  return (
    <div className="w-[700px] items-center flex-col bg-secondaryColor h-1/2 flex pt-[20px] rounded-2xl gap-5 ">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-white text-24px">Welcome to bank app!</h2>
        <p className="text-secondaryAccentColor text-32px font-bold">Login</p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-10 w-full px-5">
        <TextField
          label="Phone number"
          type="number"
          placeholder="+7(900)-00-00-00"
        />
        <TextField label="Password" placeholder="*******" />
        <button
          type="submit"
          className="w-full bg-secondaryAccentColor text-white py-2 rounded-xl text-18px font-bold border border-secondaryColor transition-colors duration-200  hover:bg-secondaryColor hover:border-secondaryAccentColor"
        >
          Login
        </button>
      </form>
      <h2 className="flex text-18px text-white gap-2">
        Already no have account?
        <p
          onClick={() => navigate(REGISTER_ROUTE)}
          className="text-secondaryAccentColor transition-all cursor-pointer text-18px hover:border-b hover:border-white"
        >
          Let's register
        </p>
      </h2>
    </div>
  );
};

export default LoginForm;
