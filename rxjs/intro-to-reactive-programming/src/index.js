import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import { interval } from "rxjs";
// import { take, map, filter, reduce } from "rxjs/operators";

// const source = ["1", "1", "foo", "2", "3", "5", "bar", "8", "13"];

// const result = source
//   .map((x) => parseInt(x))
//   .filter((x) => !isNaN(x))
//   .reduce((x, y) => x + y);

// interval(400)
//   .pipe(
//     take(9),
//     map((i) => ["1", "1", "foo", "2", "3", "5", "bar", "8", "13"][i]),
//     map((x) => parseInt(x)),
//     filter((x) => !isNaN(x)),
//     reduce((x, y) => x + y)
//   )
//   .subscribe((v) => console.log(v));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
