import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/shared/router/paths";
import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { registerForm } from "../lib/validate-form";
import { useStore } from "effector-react";
import { $isAuth } from "@/entities/auth/model/auth";

const RegisterForm = () => {
  const { submit, fields } = useForm(registerForm);
  const navigate = useNavigate();
  const isAuth = useStore($isAuth);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (!isAuth) {
      navigate(REGISTER_ROUTE);
    } else {
      navigate(HOME_ROUTE);
    }
  };

  return (
    <div className="w-[700px]  items-center flex-col bg-secondaryColor h-[60%] flex pt-[20px] rounded-2xl gap-5 ">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-white text-24px">Welcome to bank app!</h2>
        <p className="text-secondaryAccentColor text-32px font-bold">
          Register
        </p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-10 w-full px-5">
        <div className="w-full flex items-center gap-10">
          <TextField
            value={fields.firstName.value}
            onChange={(e) => fields.firstName.onChange(e.target.value)}
            error={fields.firstName.firstError?.rule}
            placeholder="John"
            label="First name"
          />
          <TextField
            placeholder="Dikaprio"
            label="Last name"
            value={fields.lastName.value}
            onChange={(e) => fields.lastName.onChange(e.target.value)}
            error={fields.lastName.firstError?.rule}
          />
        </div>
        <TextField
          label="Phone number"
          value={fields.phoneNumber.value}
          onChange={(e) => fields.phoneNumber.onChange(e.target.value)}
          error={fields.phoneNumber.firstError?.rule}
          type="number"
          placeholder="+7(900)-00-00-00"
        />
        <TextField
          label="Password"
          placeholder="*******"
          value={fields.password.value}
          onChange={(e) => fields.password.onChange(e.target.value)}
          error={fields.password.firstError?.rule}
        />
        <button
          type="submit"
          className="w-full bg-secondaryAccentColor text-white py-2 rounded-xl text-18px font-bold border border-secondaryColor transition-colors duration-200  hover:bg-secondaryColor hover:border-secondaryAccentColor"
        >
          Register
        </button>
      </form>
      <h2 className="flex text-18px text-white gap-2">
        Already have account?
        <p
          onClick={() => navigate(LOGIN_ROUTE)}
          className="text-secondaryAccentColor transition-all cursor-pointer text-18px hover:border-b hover:border-white"
        >
          Let's login
        </p>
      </h2>
    </div>
  );
};

export default RegisterForm;
