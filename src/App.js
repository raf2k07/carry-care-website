import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Firebase from "firebase";

import { store } from "./redux";
import Main from "./navigation";
import { config } from "./config/firebase.config";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    Firebase.initializeApp(config);
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;