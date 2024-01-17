import { createCardFx } from "@/entities/cards/lib/create-card-effect";
import { $user } from "@/entities/user/model/user";
import { useUnit } from "effector-react";

const MainTransactions = () => {
  const user = useUnit($user);
  const addCard = () => {
    createCardFx({
      userId: user.id,
    });
  };
  return (
    <div className="bg-secondaryBlockColor p-5 w-full h-full rounded-2xl">
      <h2 onClick={() => addCard()} className="text-32px text-white">
        Transactions
      </h2>
    </div>
  );
};

export default MainTransactions;
