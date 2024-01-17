import { createStore } from "effector";
import { createCardFx } from "../lib/create-card-effect";
export type CardType = {
  userId: number;
  cardNumber: number;
  date: string;
  cvc: number;
  balance: number;
};
export const $cards = createStore<CardType[]>([])
  .on(createCardFx.doneData, (_, cards) => cards)
  .on(createCardFx.failData, (_, error) => console.error(error));
