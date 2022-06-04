import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Book10} from "./exporters/imgExporter";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

function Adventure() {
  return (
    <div className="Adventure">
      <Container className="px-4" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                <Row>

                    <Col style={{ height: "500px" }} >
                        <Card className="cards" style={{ width: '20rem' }}>
                            <div style={{ height: '20rem', textAlign: 'center' }}>
                                <Image src={Book10} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
                            </div>
                            <Card.Body style={{ border: "1px solid grey" }} >
                                <Card.Title>
                                    Game Of Thrones
                                    <br></br>
                                    George R.R.Martin</Card.Title>
                                <Card.Text>
                                    Action, RPG ,Romance
                                </Card.Text>
                                <Button >Read</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{ height: "500px" }} >
                        <Card className="cards" style={{ width: '20rem' }}>
                            <div style={{ height: '20rem', textAlign: 'center' }}>
                                <Image src={Book10} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
                            </div>
                            <Card.Body style={{ border: "1px solid grey" }} >
                                <Card.Title>
                                    Game Of Thrones
                                    <br></br>
                                    George R.R.Martin</Card.Title>
                                <Card.Text>
                                    Action, RPG ,Romance
                                </Card.Text>
                                <Button >Read</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{ height: "500px" }} >
                        <Card className="cards" style={{ width: '20rem' }}>
                            <div style={{ height: '20rem', textAlign: 'center' }}>
                                <Image src={Book10} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
                            </div>
                            <Card.Body style={{ border: "1px solid grey" }} >
                                <Card.Title>
                                    Game Of Thrones
                                    <br></br>
                                    George R.R.Martin</Card.Title>
                                <Card.Text>
                                    Action, RPG ,Romance
                                </Card.Text>
                                <Button >Read</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{ height: "500px" }} >
                        <Card className="cards" style={{ width: '20rem' }}>
                            <div style={{ height: '20rem', textAlign: 'center' }}>
                                <Image src={Book10} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
                            </div>
                            <Card.Body style={{ border: "1px solid grey" }} >
                                <Card.Title>
                                    Game Of Thrones
                                    <br></br>
                                    George R.R.Martin</Card.Title>
                                <Card.Text>
                                    Action, RPG ,Romance
                                </Card.Text>
                                <Button >Read</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{ height: "500px" }} >
                        <Card className="cards" style={{ width: '20rem' }}>
                            <div style={{ height: '20rem', textAlign: 'center' }}>
                                <Image src={Book10} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
                            </div>
                            <Card.Body style={{ border: "1px solid grey" }} >
                                <Card.Title>
                                    Game Of Thrones
                                    <br></br>
                                    George R.R.Martin</Card.Title>
                                <Card.Text>
                                    Action, RPG ,Romance
                                </Card.Text>
                                <Button >Read</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{ height: "500px" }} >
                        <Card className="cards" style={{ width: '20rem' }}>
                            <div style={{ height: '20rem', textAlign: 'center' }}>
                                <Image src={Book10} style={{ objectFit: 'fill', border: "1px solid grey", borderBottom: "0px" }} alt="talkie" />
                            </div>
                            <Card.Body style={{ border: "1px solid grey" }} >
                                <Card.Title>
                                    Game Of Thrones
                                    <br></br>
                                    George R.R.Martin</Card.Title>
                                <Card.Text>
                                    Action, RPG ,Romance
                                </Card.Text>
                                <Button >Read</Button>
                            </Card.Body>
                        </Card>
                    </Col>







                </Row>


            </Container>
    </div>
  );
}


export default Adventure;