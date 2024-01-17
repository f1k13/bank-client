import { createStore } from "effector";
import { loginFx, registerFx } from "../lib/auth-effects";
import { getUserFx } from "@/entities/user/lib/user-effect";

export const $isAuth = createStore<boolean>(false)
  .on(registerFx.doneData, () => true)
  .on(registerFx.failData, () => false)
  .on(loginFx.doneData, () => true)
  .on(loginFx.failData, () => false)
  .on(getUserFx.doneData, () => true)
  .on(getUserFx.doneData, () => true)
  .on(getUserFx.failData, () => false);
