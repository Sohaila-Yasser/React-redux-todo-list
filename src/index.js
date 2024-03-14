import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import todoReducer from "./Redux/reducers";
import { createStore } from "redux";

import App from "./App";

const store = createStore(todoReducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
