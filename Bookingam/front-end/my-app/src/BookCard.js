import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import "./pages/pagesCSS/page.css"


const BookCard = (props) => {
  return(
      

<div class="row">
<div className="home">

<Container className="px-4" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
  <Row>

      <Col style={{ height: "500px" }} >
          <Card className="cards" style={{ width: '20rem' }}>
              <div style={{ height: '20rem', textAlign: 'center' }}>
                  <Image src={props.image} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
              </div>
              <Card.Body style={{ border: "1px solid grey" }} >
                  <Card.Title>
                      {props.title}
                      <br></br>
                    {props.author}</Card.Title>
                  <Card.Text>
                      Action, RPG ,Romance
                  </Card.Text>
                  <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
              </Card.Body>
          </Card>
      </Col>
      
      </Row>
      
      </Container>
</div>
</div>
  )
}

export default BookCard;