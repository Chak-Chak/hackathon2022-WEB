import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import { Provider } from 'react-redux';
import {store} from "./store/mergeReducer";

function App() {
  return (
    <div>
        <Provider store={store}>хуй
            <Navbar /> hrjtkjmft
        </Provider>
    </div>
  );
}

export default App;
