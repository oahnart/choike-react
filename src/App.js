import React from "react";
import { HashRouter } from "react-router-dom";
import "antd/dist/antd.css";

import LocaleProvider from "./utils/localeProvider/LocaleProvider";
import Routes from "./Routes";
import "./App.scss";

function App() {
  return (
    <LocaleProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </LocaleProvider>
  );
}

export default App;
