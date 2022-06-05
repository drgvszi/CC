import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, Button, Image } from 'react-bootstrap'



const BookCard = (props) => {
  return(
 
      <Col style={{ height: "600px" }} >
          <Card className="cards" style={{ width: '20rem' }}>
              <div style={{ height: '20rem', textAlign: 'center' }}>
                  <Image src={props.image} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
              </div>
              <Card.Body style={{ border: "1px solid grey" }} >
                  <Card.Title style={{height:"100px"}}>
                      {props.title}
                      <br></br><br></br>
                    {props.author}
                    <br></br>
                    <br></br></Card.Title>
                  <Card.Text  style={{height:"50px",paddingTop:"10px"}}>
                  <br></br>
                     {props.genre}
                  </Card.Text>
                  <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
              </Card.Body>
          </Card>
      </Col>
      
      


  )
}

export default BookCard;