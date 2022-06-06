import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getDatabase, ref, set, onValue, off } from "firebase/database";
import { useAuthState } from "../creditentials/authContext";
import BookCard from "../../components/bookGenerate/BookCard";

import "../pagesCSS/page.css";
import request from "superagent";

const Adventure = () => {
  const { user } = useAuthState();
  const [adventureBooks, setAdventureBooks] = useState([]);

  const handleAddToShelf = (book) => {
    const db = getDatabase();

    const userRef = ref(db, `/users/${user.uid}/favorites`);

    onValue(userRef, (snap) => {
      const favorites = snap.val();

      if (snap.exists()) {
        if (!favorites.includes(book.id)) {
          favorites.push(book.id);

          set(userRef, favorites).then(() => {
            off(userRef);
          });
        }
      } else {
        set(userRef, [book.id]).then(() => {
          off(userRef);
        });
      }
    });
  };

  useEffect(() => {
    request
      .get("https://www.googleapis.com/books/v1/volumes?q=subject:adventure")
      .then((data) => setAdventureBooks(data.body));
  }, []);

  if (adventureBooks.length === 0) return <p> Nu exista carti </p>;

  return (
    <div class="row">
      <div class="column left">
        <ul>
          <li class="line">
            <NavLink to="/adventure">Adventure</NavLink>
          </li>
          <li class="line">
            <NavLink to="/action">Action</NavLink>
          </li>
          <li class="line">
            <NavLink to="/romance">Romance</NavLink>
          </li>
          <li class="line">
            <NavLink to="/horror">Horror</NavLink>
          </li>
          <li class="line">
            <NavLink to="/fiction">Fiction</NavLink>
          </li>
        </ul>
      </div>
      <div class="column right">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {adventureBooks.items.map((book, index) => {
            return (
              <BookCard
                key={index}
                image={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
                }
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                genre={book.volumeInfo.categories}
                handleAddToShelf={() => handleAddToShelf(book)}
                buylink={book.saleInfo.buyLink}
                reviewlink={book.volumeInfo.previewLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Adventure;
