//React
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store/";
//Pages
import { useRoutes } from "./pages/routes";
import "./_reset.scss";


const App = () => {
  const routes = useRoutes();
  return (
    <Provider store={store}>
      <Router>
        {routes}
      </Router>
    </Provider>
  );
};
export default App;
