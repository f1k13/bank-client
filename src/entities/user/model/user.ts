import { createStore } from "effector";
import { getUserFx } from "../lib/user-effect";
import { loginFx, registerFx } from "@/entities/auth/lib/auth-effects";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export const $user = createStore<User>({} as User)
  .on(getUserFx.doneData, (_, user) => user)
  .on(getUserFx.failData, (_, error) => console.log(error))
  .on(registerFx.doneData, (_, user) => user)
  .on(registerFx.failData, (_, error) => console.error(error))
  .on(loginFx.doneData, (_, user) => user)
  .on(loginFx.failData, (_, error) => console.error(error));
