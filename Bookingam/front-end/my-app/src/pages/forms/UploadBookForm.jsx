import React, { useState } from "react";
import "../pagesCSS/form.css";
import firebase from "../creditentials/initFB";

function UploadBookForm() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div className="form-group">
      <input type="text" onChange={handleOnChange} value={title}></input>
      <button onClick={createTodo}>Upload </button>
    </div>
  );
}

export default UploadBookForm;
