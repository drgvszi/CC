import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card, Button, Image } from "react-bootstrap";

const MyBookCard = ({ book }) => {
  console.log(book);

  return (
    <Col style={{ height: "600px" }}>
      <Card className="cards" style={{ width: "20rem" }}>
        <div style={{ height: "20rem", textAlign: "center" }}>
          <Image
            src={book.img}
            style={{
              objectFit: "fill",
              border: "1px solid grey",
              borderBottom: "0px",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png";
            }}
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
              onClick={() => window.open(book.url, "_blank")}
              style={{
                color: "silver",
                background: "black",
                boxShadow: "none",
                border: "0",
              }}
            >
              Preview
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyBookCard;
