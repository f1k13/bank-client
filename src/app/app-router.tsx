import { $isAuth } from "@/entities/auth/model/auth";
import { authRouter, publicRouter } from "@/shared/router/router";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/shared/router/paths";
import { getUserFx } from "@/entities/user/lib/user-effect";
import { getToken } from "@/shared/lib/token-events";
import { setTokenToApi } from "@/shared/api/api";
import { $user } from "@/entities/user/model/user";

const AppRouter = () => {
  const isAuth = useUnit($isAuth);
  const navigate = useNavigate();
  const token = getToken();
  const user = useUnit($user);
  console.log(user);

  useEffect(() => {
    setTokenToApi(String(token));
    getUserFx();
    if (token) {
      navigate(HOME_ROUTE);
    } else {
      navigate(LOGIN_ROUTE);
    }
  }, []);
  return (
    <Routes>
      {isAuth &&
        authRouter.map(({ path, Component, Layout }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
      {publicRouter.map(({ path, Component, Layout }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
