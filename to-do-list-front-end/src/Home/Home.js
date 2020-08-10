import React, { useState } from "react"
import { Card } from "react-bootstrap"
import Calendar from 'react-calendar';
import "./Home.css"
import Todo from "../To-do/ToDo";

const UserData = React.createContext();
export const UserConsumer = UserData.Consumer;

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            date : new Date,
            handleChange : this.handleChange,
            refreshContents : false
        }
    }
    handleChange = ()=>{
        this.setState({refreshContents: true})
    }

    logout = () =>{
        alert("logged out:");
    }

    setValue = (value)=>{
        alert(value)
    }

    render() {
        return (
            <UserData.Provider value={this.state}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 ml-4 mt-4 ">
                            <Calendar className="border calendar-width sticky-top"
                                onChange={(value) => this.setValue(value)}
                                value={this.state.date}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Todo />
                        </div>
                        <div className="col-lg-2 ml-2 mt-4">
                            <Card className="border week-stats-width">
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
            </UserData.Provider>
        );
    }
}
export default Home;