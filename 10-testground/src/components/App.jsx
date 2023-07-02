import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  var isDone = true;
  const strikeThrough = { textDecoration: "line-through" };

  return <p style={isDone ? strikeThrough : null}> Buy milk </p>;
}

export default App;
