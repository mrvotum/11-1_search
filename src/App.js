import React from "react";
import { Provider } from "react-redux";
import Skills from "./components/Skils";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Skills></Skills>
      </Provider>
    </div>
  );
}

export default App;
