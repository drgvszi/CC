import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useAuthState } from "./creditentials/authContext";
import "./pagesCSS/page.css";
import MyBookCard from "../components/bookGenerate/MyBookCard";

const MyBooks = () => {
  const { user } = useAuthState();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (user.uid && books === null) {
      const db = getDatabase();

      const userRef = ref(db, `/users/${user.uid}/books`);

      onValue(userRef, (snap) => {
        const books = snap.val();

        setBooks(books);
      });
    }
  }, [user.uid, books]);

  //   const handleRemoveBook = (bookId) => {
  //     const db = getDatabase();

  //     const userRef = ref(db, `/users/${user.uid}/favorites`);

  //     onValue(userRef, (snap) => {
  //       const favorites = snap.val();
  //       if (snap.exists()) {
  //         const filteredFavorites = favorites.filter((x) => x !== bookId);

  //         setFavoriteBooks(null);

  //         set(userRef, filteredFavorites).then(() => {
  //           off(userRef);
  //         });
  //       }
  //     });
  //   };

  if (!books) return <> </>;

  console.log(books);

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
            {books.map((book, index) => {
              return <MyBookCard key={index} book={book} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
