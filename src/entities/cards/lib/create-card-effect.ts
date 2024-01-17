import { api } from "@/shared/api/api";
import { createEffect } from "effector";
import { CardType } from "../model/card";

export const createCardFx = createEffect(async (params: { userId: number }) => {
  const { data } = await api.post<CardType[]>("/cards/create", {
    ...params,
  });
  console.log(data);
  return data;
});
