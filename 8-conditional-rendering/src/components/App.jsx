import React from "react";
import Login from "./Login";

var isLoggedIn = true;
const currentTime = new Date().getHours();

function App() {
  return currentTime > 18 ? <h1>Why are you working ?</h1> : null;
  // return (  <div className="container">
  //   {isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
}

export default App;
