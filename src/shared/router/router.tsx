import LoginPage from "@/pages/login-page";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./paths";
import RegisterPage from "@/pages/register-page";
import { ReactNode } from "react";
import { AuthLayout, MainLayout } from "@/app/layouts";
import HomePage from "@/pages/home-page";

type Routers = {
  path: string;
  Component: () => JSX.Element;
  Layout: ({ children }: { children: ReactNode }) => JSX.Element;
};

export const publicRouter: Routers[] = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
    Layout: AuthLayout,
  },
  { path: REGISTER_ROUTE, Component: RegisterPage, Layout: AuthLayout },
];

export const authRouter = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    Layout: MainLayout,
  },
];
