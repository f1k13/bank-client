import { api } from "@/shared/api/api";
import { createEffect } from "effector";
import { User } from "../model/user";

export const getUserFx = createEffect<void, User, Error>(async () => {
  try {
    const { data } = await api.get("/users/self");
    return data;
  } catch (error) {
    throw new Error();
  }
});
