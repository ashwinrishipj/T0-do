import React, { useState } from "react"
import { Navbar, Nav , Card } from "react-bootstrap"
import logo from "./to-do-list.png"
import Calendar from 'react-calendar';
import "./Home.css"
import Todo from "../To-do/ToDo";

function Home() {

    const [date, setdate] = useState(new Date);

    const logout = () => {
        alert("logged out")
    }

    const setValue = (value) => {
        setdate(value);
        alert(value);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"> <img src={logo} height="40" color="white" alt="couldn't load image" /> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    <Navbar.Text>
                        <span className="navbar-Logout"><i className="fa fa-sign-out fa-2x fa-white" style={{ color: "#fff", marginLeft: "20px" }} onClick={() => logout()} aria-hidden="true" /></span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <div className="row mt-2 ml-1">
                    <div className="col-sm-3">
                        <Calendar className="border"
                            onChange={(value) => setValue(value)}
                            value={date}
                        />
                    </div>
                    <div className="col-lg-6">
                        <Todo/>
                    </div>
                    <div className="col-lg-3">
                        <Card className="border" style={{ width: '17rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;