import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book10 } from "../exporters/imgExporter";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "../pagesCSS/list.css";
function Horror() {
    return (
        <div className="Horror">

<div class="row">
                <div class="column left">

                    <ul>
                        <li class="line">
                            <NavLink to="/adventure">
                                Adventure
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/action">
                                Action
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/romance">
                                Romance
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/horror">
                                Horror
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/fiction">
                                Fiction
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div class="column right">
                    <div className="home">

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
                                            <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
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
                                            <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
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
                                            <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
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
                                            <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
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
                                            <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
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
                                            <Button style={{background:"black",boxShadow:"none",border:"0"}}>Read</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>







                            </Row>


                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Horror;