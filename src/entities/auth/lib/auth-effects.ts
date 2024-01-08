import { setToken } from "./../../../shared/lib/token-events";
import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export type RegisterUser = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export const registerFx = createEffect(async (params: RegisterUser) => {
  const { data } = await api.post("/auth/registration", { ...params });
  setToken(data.token);
  return data;
});
export const loginFx = createEffect(
  async (params: { phoneNumber: string; password: string }) => {
    const { data } = await api.post("/auth/login", { ...params });
    return data;
  }
);
