import { Provider } from "react-redux";
import PublicRouter from "./router/Publick";
import store from "./store/index";
import "./variables.css";

function App() {
  return (
    <Provider store={store}>
      <PublicRouter />
    </Provider>
  );
}

export default App;
