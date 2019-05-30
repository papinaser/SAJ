import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import MainLayout from "./components/layout/mainLayout/mainLayout";


function App() {
  return (
      <Provider store={store}>
        <MainLayout/>
      </Provider>
  );
}

export default App;
