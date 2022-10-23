import { Provider } from "react-redux";
import { persistor, store } from "./src/Store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./src";

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;
