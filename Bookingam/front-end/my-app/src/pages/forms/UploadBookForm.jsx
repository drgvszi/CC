import React, { useState } from "react";
import "../pagesCSS/form.css";
import firebase from "../creditentials/initFB";
import "../pagesCSS/login_register.css"
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
    <body>
    <div className="form">
      <div id="uploadForm" class="center">
        <h1 >Upload Book</h1>
        <form >
          <div className="input-container">
            <label>Title </label>
            <input id="formID" type="text" name="title" placeholder="Title" />
          </div>
          <div className="input-container">
          <label>Author </label>
            <input id="formID" type="text" name="author" placeholder="Author" />
          </div>
          <div className="input-container">
          <label>Genre </label>
            <input id="formID" type="text" name="genre" placeholder="Genre" />
          </div>
          <div className="input-container">
          <label>URL </label>
            <input id="formID" type="url" name="url" placeholder="URL" />
          </div>
          <div className="button-container">
            <button id="upload" class="btn btn-primary" type="submit">Upload</button>
          </div>
        </form>
      </div>

    </div>
  </body>
  );
}

export default UploadBookForm;
