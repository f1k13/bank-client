import { MainCards } from "@/features/main-cards";
import { MainChart } from "@/features/main-chart";
import { MainTransactions } from "@/features/main-transactions";
import { MainUserFavorites } from "@/features/main-user-favorites";
import { MainWallets } from "@/features/main-wallets";

const MainWidgets = () => {
  return (
    <div className="w-full h-full gap-5 items-center flex flex-col">
      <div className="flex w-full items-center h-full gap-5">
        <MainTransactions />
        <MainWallets />
        <MainUserFavorites />
      </div>
      <div className="flex w-full h-full items-center gap-5">
        <MainCards />
        <MainChart />
      </div>
    </div>
  );
};

export default MainWidgets;
