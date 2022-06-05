import React from "react";
import BookCard from "./BookCard";
import { Container, Row } from "react-bootstrap";
import { getDatabase, ref, set, onValue, off } from "firebase/database";
import { useAuthState } from "../../pages/creditentials/authContext";

const BookList = (props) => {
  const { user } = useAuthState();

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

  return (
    <div>
      <Container
        className="px-4"
        style={{ paddingTop: "3%", paddingBottom: "3%" }}
      >
        <Row>
          {props.books.map((book, i) => {
            return (
              <BookCard
                key={i}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                genre={book.volumeInfo.categories}
                handleAddToShelf={() => handleAddToShelf(book)}
                buylink={book.saleInfo.buyLink}
                reviewlink={book.volumeInfo.reviewLink}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BookList;
