import AppRouter from "./app-router";
import Providers from "./layouts/providers";
import "./styles/main.scss";
const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
