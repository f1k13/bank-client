import { createStore } from "effector";
import { getUserFx } from "../lib/user-effect";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export const $user = createStore<User>({} as User)
  .on(getUserFx.doneData, (_, user) => user)
  .on(getUserFx.failData, (_, error) => console.log(error));
