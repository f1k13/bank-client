import {
  CardIcon,
  PigIcon,
  UserIcon,
  WalletIcon,
} from "@/shared/ui/icons/main-icons";
import UserCardIcon from "@/shared/ui/icons/main-icons/user-card-icon";

export type SideBar = {
  id: string;
  title: string;
  icon: JSX.Element;
};

export const sideBar: SideBar[] = [
  {
    id: "cards",
    title: "Cards",
    icon: <CardIcon />,
  },
  {
    id: "pig",
    title: "Savings account",
    icon: <PigIcon />,
  },
  {
    id: "wallet",
    title: "Wallets",
    icon: <WalletIcon />,
  },
  {
    id: "transfer",
    title: "Transfer",
    icon: <UserCardIcon />,
  },
  {
    id: "user",
    title: "Profile",
    icon: <UserIcon />,
  },
];
