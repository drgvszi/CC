import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card, Button, Image } from "react-bootstrap";
import request from "superagent";

const ShelfBook = ({ bookId, handleRemoveBook }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (book === null && bookId) {
      request
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((data) => {
          const bookData = {
            title: data.body.volumeInfo.title,
            author: data.body.volumeInfo.authors,
            genre: data.body.volumeInfo.categories,
            thumbnail: data.body.volumeInfo.imageLinks.thumbnail,
          };

          setBook(bookData);
        });
    }
  }, [bookId, book]);

  if (book === null) return <> </>;

  return (
    <Col style={{ height: "600px" }}>
      <Card className="cards" style={{ width: "20rem" }}>
        <div style={{ height: "20rem", textAlign: "center" }}>
          <Image
            src={book.thumbnail}
            style={{
              objectFit: "fill",
              border: "1px solid grey",
              borderBottom: "0px",
            }}
            alt="talkie"
          />
        </div>
        <Card.Body style={{ border: "1px solid grey" }}>
          <Card.Title style={{ height: "100px" }}>
            {book.title}
            <br></br>
            <br></br>
            {book.author}
            <br></br>
            <br></br>
          </Card.Title>
          <Card.Text style={{ height: "50px", paddingTop: "10px" }}>
            <br></br>
            {book.genre}
          </Card.Text>

          <div
            style={{ display: "flex", flexDirection: "row", columnGap: "20px" }}
          >
            <Button
              style={{ background: "black", boxShadow: "none", border: "0" }}
            >
              Read
            </Button>
            <Button onClick={() => handleRemoveBook(bookId)}>Remove</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShelfBook;
