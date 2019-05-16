import React from "react";
import "./App.css";

import ProductDetail from "./ProductDetail";
import Fetch from "./Fetch";

function App() {
  return (
    <div className="App">
      <Fetch
        url="https://api.github.com/users/konekoya"
        render={data => <ProductDetail data={data} />}
        error={error => <div>{error.message}</div>}
      />
    </div>
  );
}

export default App;
