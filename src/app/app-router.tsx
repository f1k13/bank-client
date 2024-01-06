import { publicRouter } from "@/shared/router/router";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
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
