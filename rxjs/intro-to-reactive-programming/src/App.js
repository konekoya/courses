import React from "react";
import "./App.css";

import { of, from, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap, map, pluck, merge, startWith } from "rxjs/operators";

function App() {
  var refreshButton = document.querySelector(".refresh");

  var refreshClickStream = fromEvent(refreshButton, "click");

  var startupRequestStream = of("https://api.github.com/users");

  // var requestOnRefreshStream = refreshClickStream.map((ev) => {
  //   var randomOffset = Math.floor(Math.random() * 500);
  //   return "https://api.github.com/users?since=" + randomOffset;
  // });

  // flatMap is now an alias for mergeMap
  // but will work just the same.
  // var responseStream = startupRequestStream
  //   .merge(requestOnRefreshStream)
  //   .flatMap((requestUrl) => from(ajax.getJSON(requestUrl)));
  const responseStream = startupRequestStream.pipe(
    mergeMap((url) => from(ajax.getJSON(url)))
  );

  function createSuggestionStream(responseStream) {
    return responseStream.pipe(
      map((listUser) => {
        console.log(listUser);
        return listUser[Math.floor(Math.random() * listUser.length)];
      })
      // startWith(null),
      // merge(refreshClickStream.pipe(map((ev) => null)))
    );
  }

  var suggestion1Stream = createSuggestionStream(responseStream);
  var suggestion2Stream = createSuggestionStream(responseStream);
  var suggestion3Stream = createSuggestionStream(responseStream);

  // Rendering ---------------------------------------------------
  function renderSuggestion(suggestedUser, selector) {
    var suggestionEl = document.querySelector(selector);
    if (suggestedUser === null) {
      suggestionEl.style.visibility = "hidden";
    } else {
      suggestionEl.style.visibility = "visible";
      var usernameEl = suggestionEl.querySelector(".username");
      usernameEl.href = suggestedUser.html_url;
      usernameEl.textContent = suggestedUser.login;
      var imgEl = suggestionEl.querySelector("img");
      imgEl.src = "";
      imgEl.src = suggestedUser.avatar_url;
    }
  }

  suggestion1Stream.subscribe((user) => {
    renderSuggestion(user, ".suggestion1");
  });

  suggestion2Stream.subscribe((user) => {
    renderSuggestion(user, ".suggestion2");
  });

  suggestion3Stream.subscribe((user) => {
    renderSuggestion(user, ".suggestion3");
  });

  return (
    <div className="container">
      <div className="header">
        <h3>Who to follow</h3>
        <a href="#" className="refresh">
          Refresh
        </a>
      </div>
      <ul className="suggestions">
        <li className="suggestion1">
          <img />
          <a href="#" target="_blank" className="username">
            this will not be displayed
          </a>
          <a href="#" className="close close1">
            x
          </a>
        </li>
        <li className="suggestion2">
          <img />
          <a href="#" target="_blank" className="username">
            neither this
          </a>
          <a href="#" className="close close2">
            x
          </a>
        </li>
        <li className="suggestion3">
          <img />
          <a href="#" target="_blank" className="username">
            nor this
          </a>
          <a href="#" className="close close3">
            x
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
