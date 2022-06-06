import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, off } from "firebase/database";
import { useAuthState } from "./creditentials/authContext";
import ShelfBook from "../components/bookGenerate/ShelfBook";
import "./pagesCSS/page.css";
const MyBookshelf = () => {
  const { user } = useAuthState();
  const [favoriteBooks, setFavoriteBooks] = useState(null);

  useEffect(() => {
    if (user.uid && favoriteBooks === null) {
      const db = getDatabase();

      const userRef = ref(db, `/users/${user.uid}/favorites`);

      onValue(userRef, (snap) => {
        const favorites = snap.val();

        setFavoriteBooks(favorites);
      });
    }
  }, [user.uid, favoriteBooks]);

  const handleRemoveBook = (bookId) => {
    const db = getDatabase();

    const userRef = ref(db, `/users/${user.uid}/favorites`);

    onValue(userRef, (snap) => {
      const favorites = snap.val();
      if (snap.exists()) {
        const filteredFavorites = favorites.filter((x) => x !== bookId);

        setFavoriteBooks(null);

        set(userRef, filteredFavorites).then(() => {
          off(userRef);
        });
      }
    });
  };

  if (!favoriteBooks) return <p> Nu exista carti favorite </p>;

  return (
    <div class="row">
      <div class="column left"></div>
      <div class="column right">
        <div className="home">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            {favoriteBooks.map((book, index) => {
              return (
                <ShelfBook
                  key={index}
                  bookId={book}
                  handleRemoveBook={handleRemoveBook}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookshelf;
