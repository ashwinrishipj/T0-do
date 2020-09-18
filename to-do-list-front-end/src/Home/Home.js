import React from "react"
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
                        <div className="col-lg-5">
                            <Todo />
                        </div>
                    </div>
                </div>
            </UserData.Provider>
        );
    }
}
export default Home;