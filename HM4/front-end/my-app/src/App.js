import React from "react";
import AddTodoItem from "./components/AddTodoItem";
import ImageRecognition from "./components/ImageRecognition";
import FormRecognition from "./components/FormRecognition";
import './index';

const App = () => {

  return (
    <div className="App">
      <div className="row">
      <AddTodoItem />
      <ImageRecognition />
      <FormRecognition />
      </div>
     
    </div>
  );
}

export default App;
