import React from "react";

import Euro from "./Euro";
import Pound from "./Pound";
import Amount from "./Amount";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Amount>
        {({ amount }) => {
          return (
            <>
              <h1>My Currency Converter</h1>
              <Euro amount={amount} />
              <Pound amount={amount} />
            </>
          );
        }}
      </Amount>
    </div>
  );
}

export default App;
