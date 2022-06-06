import React, { useState, useEffect } from "react";
import "../pagesCSS/form.css";
import "../pagesCSS/login_register.css";
import { getDatabase, ref, set, off, onValue } from "firebase/database";
import { useAuthState } from "../../pages/creditentials/authContext";
import { useNavigate } from "react-router-dom";

const UploadBookForm = () => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user.uid) {
      const db = getDatabase();

      const bookRef = ref(db, `/users/${user.uid}/books`);

      const unsubscribe = onValue(bookRef, (snap) => {
        const books = snap.val();

        setBooks(books);
      });

      return () => unsubscribe();
    }
  }, [user.uid]);

  const handleAddBook = (e) => {
    e.preventDefault();

    const book = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      url: e.target.url.value,
      img: e.target.imgurl.value,
    };

    const db = getDatabase();

    const bookRef = ref(db, `/users/${user.uid}/books`);

    if (books) {
      const newBooks = books;
      newBooks.push(book);

      set(bookRef, newBooks, () => {
        off(bookRef);
      });
    } else {
      set(bookRef, [book], () => {
        off(bookRef);
      });
    }

    navigate("/myBooks");
  };

  return (
    <div className="form">
      <div id="uploadForm" class="center">
        <h1>Upload Book</h1>
        <form onSubmit={(e) => handleAddBook(e)}>
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
          <div className="input-container">
            <label>Image URL </label>
            <input
              id="formID"
              type="url"
              name="imgurl"
              placeholder="Image URL"
            />
          </div>
          <div className="button-container">
            <button id="upload" class="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBookForm;
