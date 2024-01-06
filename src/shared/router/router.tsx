import LoginPage from "@/pages/login-page";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./paths";
import RegisterPage from "@/pages/register-page";
import { ReactNode } from "react";
import { AuthLayout } from "@/app/layouts";

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

export const authRouter = [{}];
