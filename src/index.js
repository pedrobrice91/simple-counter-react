import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SecondsCounter from "./components/SecondsCounter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
let counter = 123456;

setInterval(() => {
  let seconds1 = Math.floor((counter / 1) % 10);
  let seconds2 = Math.floor((counter / 10) % 10);
  let seconds3 = Math.floor((counter / 100) % 10);
  let seconds4 = Math.floor((counter / 1000) % 10);
  let seconds5 = Math.floor((counter / 10000) % 10);
  let seconds6 = Math.floor((counter / 100000) % 10);
  
  counter++;
  /* if (counter === 10) {
    let segundos2 = { counter };
  } else {
  }  */

  root.render(
    <React.StrictMode>
      <SecondsCounter
        seconds1={seconds1}
        seconds2={seconds2}
        seconds3={seconds3}
        seconds4={seconds4}
        seconds5={seconds5}
        seconds6={seconds6}
      />
    </React.StrictMode>
  );
}, 500);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
