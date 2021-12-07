import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
