import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

const Routes: React.FC = () => {
  const Element = useRoutes(routes);
  return Element;
};
const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
